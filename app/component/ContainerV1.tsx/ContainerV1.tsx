import clsx from "clsx";
import { ReactNode } from "react";



export default function ContainerV1({className, children}: {className?: string, children?: ReactNode}) {
   return (
      <div className={clsx(className, "containerV1")}>
         {children}
      </div>
   )
}