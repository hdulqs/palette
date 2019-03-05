import React from "react"
import { Icon, IconProps } from "./Icon"

/** CheckCircleIcon */
export const CheckCircleIcon: React.SFC<IconProps> = props => {
  return (
    <Icon {...props} viewBox="0 0 18 18">
      <title>check</title>
      <path
        d="M9 1.889A7.111 7.111 0 1 1 9 16.11 7.111 7.111 0 0 1 9 1.89zM9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm4.32 5.796l-.764-.783-4.81 4.765-2.302-2.25-.782.783 3.085 3.067 5.573-5.582z"
        fill="#000"
        fillRule="nonzero"
      />
    </Icon>
  )
}
