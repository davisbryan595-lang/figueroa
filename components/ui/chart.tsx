"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

const CHART_COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
] as const

type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    theme?: {
      light?: string
      dark?: string
    }
    icon?: React.ComponentType
  } & ({ color?: string; icon?: React.ComponentType } | { pattern?: string; icon?: React.ComponentType })
}

const ChartContext = React.createContext<ChartConfig | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    config: ChartConfig
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={config}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn("flex aspect-auto justify-center overflow-hidden", className)}
        {...props}
      >
        <RechartsPrimitive.ResponsiveContainer width="100%" height={300}>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color)

  if (colorConfig.length === 0) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: [
          `[data-chart=${id}] {`,
          ...colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.light || itemConfig.color

            return color ? `  --color-${key}: ${color};` : null
          }),
          "}",
          `[data-chart=${id}].dark {`,
          ...colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.dark || itemConfig.color

            return color ? `  --color-${key}: ${color};` : null
          }),
          "}",
        ]
          .filter(Boolean)
          .join("\n"),
      }}
    />
  )
}
ChartStyle.displayName = "ChartStyle"

const ChartTooltip = React.forwardRef<
  React.ElementRef<typeof RechartsPrimitive.Tooltip>,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dashed" | "dot" | "none"
  }
>(
  (
    { active, payload, label, hideLabel = false, hideIndicator = false, indicator = "line", className, ...props },
    ref,
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload || payload.length === 0) {
        return null
      }

      const [item] = payload
      const itemConfig = config[item.dataKey as keyof typeof config]

      return <div className="mr-2 font-medium">{`${itemConfig?.label || item.dataKey}: `}</div>
    }, [config, hideLabel, payload])

    if (!active || !payload || payload.length === 0) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        suppressHydrationWarning
        className={cn(
          "border-input/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
        {...props}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const itemConfig = config[item.dataKey as keyof typeof config]
            const indicatorColor = item.payload[`fill-${item.dataKey}`] || item.color || "hsl(var(--foreground))"

            return (
              <div key={`${item.dataKey}-${index}`} className="flex w-full flex-nowrap items-center gap-1.5">
                {!hideIndicator && (
                  <div
                    className={cn(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      indicator === "dot" && "rounded-full",
                      indicator === "line" && "h-2 w-0.5",
                      indicator === "dashed" && "rounded-[2px]",
                    )}
                    style={
                      {
                        "--color-bg": indicatorColor,
                        "--color-border": indicatorColor,
                      } as React.CSSProperties
                    }
                  />
                )}
                <span className="text-muted-foreground">{itemConfig?.label || item.name}</span>
                <span className="ml-auto font-mono font-medium text-foreground">{item.value}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  },
)
ChartTooltip.displayName = "ChartTooltip"

const ChartLegend = React.forwardRef<
  React.ElementRef<typeof RechartsPrimitive.Legend>,
  React.ComponentProps<typeof RechartsPrimitive.Legend>
>(({ className, ...props }, ref) => (
  <RechartsPrimitive.Legend
    ref={ref}
    className={cn("mt-4 flex flex-wrap justify-center gap-4", className)}
    {...props}
  />
))
ChartLegend.displayName = "ChartLegend"

export { ChartContainer, ChartStyle, ChartTooltip, ChartLegend, ChartContext, useChart, CHART_COLORS }
export type { ChartConfig }
