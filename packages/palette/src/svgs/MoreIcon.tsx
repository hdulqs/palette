import React from "react"
import { color } from "../helpers"
import { Icon, IconProps } from "./Icon"

/** MoreIcon */
export const MoreIcon: React.SFC<IconProps> = props => {
  return (
    <Icon {...props} viewBox="0 0 18 18">
      <title>view more</title>
      <g fill={color(props.fill)} fillRule="nonzero">
        <path d="M4 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM14 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      </g>
    </Icon>
  )
}
