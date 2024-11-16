import React, { CSSProperties, useEffect, useRef } from "react";
import { ThemeProps } from "../Icon/icon"
export interface ProgressProps {
  /** 是否可以手动改变进度条 */
  touch?: boolean;
  /** 是否显示具体进度 */
  showText?: boolean;
  /** 百分比 */
  percent: number;
  /** */
  strokeHeight?: number;
  /** 可以扩展样式 */
  styles?: CSSProperties;
  /** 主题色 */
  theme?: ThemeProps;
  /** 处理鼠标控制进度 */
  mouseMove?: (e: React.MouseEvent) => void
}

export const Progress = ({
  touch = false,
  showText = true,
  percent,
  strokeHeight = 15,
  styles,
  theme = "primary"
}: ProgressProps) => {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (outerRef.current) {
      console.log(outerRef.current.clientWidth,outerRef.current.offsetLeft)
    }
  })
  const handleMove = (e: React.MouseEvent) => {
    if (!touch) return 
    if (outerRef.current){
      const outerWidth = outerRef.current.clientWidth
      const innerX = e.clientX - outerRef.current.offsetLeft;
      const percent = Math.round(100 * (innerX / outerWidth))
      if (innerRef.current) {
        innerRef.current.style.width = `${percent}%`
      }
    }
      
  }
  return (
    <div className="vanilla-progress-bar" style={styles}>
      <div
        className="vanilla-progress-bar-outer"
        style={{ height: `${strokeHeight}px` }}
        onMouseEnter={(e) => console.log(e.clientX, "enter")}
        onMouseMove={handleMove}
        onMouseLeave={(e) => console.log(e.clientX, "leave")}
        ref={outerRef}
      >
        <div
          ref={innerRef}
          className={`vanilla-progress-bar-inner color-${theme}`}
          style={{
            width: `${percent}%`,
          }}
        >
          {showText && !touch && <span className="inner-text">{percent}%</span>}
        </div>
      </div>
    </div>
  );
}