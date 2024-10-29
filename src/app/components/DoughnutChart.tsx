"use client"

import Chart from "chart.js/auto"
import { useRef, useEffect } from "react"

function DoughnutChart() {
    const chartInstance = useRef<Chart<"doughnut">>(null)
    const containerRef = useRef<HTMLCanvasElement>()

    useEffect(
        () => {
            const instance = new Chart(containerRef.current, {
                type: "doughnut",
                options: {
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            titleFont: { family: "vazir", size: 12, weight: 500 }
                        }
                    }
                },
                data: {
                    labels: [
                        "فولاد تدبیر اصفهان",
                        "سایر"
                    ],
                    datasets: [
                        {
                            data: [74, 26],
                            backgroundColor: [
                                "#4C9AAF",
                                "#C89EF1"
                            ]
                        }
                    ]
                }
            })

            chartInstance.current = instance
        }, []
    )

    useEffect(
        () => {
            return () => {
                chartInstance.current.destroy()
            }
        }, []
    )


    return (
        <div className="w-full">
            <canvas ref={containerRef}></canvas>

            <div className="space-y-2 mt-8">
                <div className="flex items-center gap-x-2">
                    <div className="w-3.5 h-3.5 rounded-sm bg-[#4C9AAF]"></div>
                    <p className="text-sm text-black/90">فولاد تدبیر اصفهان</p>
                </div>

                <div className="flex items-center gap-x-2">
                    <div className="w-3.5 h-3.5 rounded-sm bg-[#C89EF1]"></div>
                    <p className="text-sm text-black/90">سایر</p>
                </div>
            </div>
        </div>
    )
}

export default DoughnutChart