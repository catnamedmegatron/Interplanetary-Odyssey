"use client"
import Lottie from "lottie-react"
import animationData from "@/assets/animations/gemini-plan-loading.json"

export default function LoadingPlan() {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <Lottie animationData={animationData} loop autoplay className="w-60 h-60" />
    </div>
  )
}
