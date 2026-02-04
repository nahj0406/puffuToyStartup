import clsx from "clsx";
import { ReactNode } from "react";



export default function ContainerV1({className, id, children}: {className?: string, id?: string, children?: ReactNode}) {
   return (
      <div className={clsx(className, "containerV1")} id={id}>
         {children}
      </div>
   )
}