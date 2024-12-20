"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionToolTip } from "@/components/action-tooltip";

const NavigationItem = ({ id, path, name }) => {

    const params = useParams();
    const router = useRouter();

    const onClick = () => {
        router.push(path);
    }

    return (
        <ActionToolTip side="right" align="center" label={name ?? 'Cord name'}>
            <button onClick={onClick} className="group relative flex items-center w-full">
                <div className={cn(
                    "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
                    params !== path && "group-hover:h-[20px]",
                    params === path ? "h-[36px]" : "h-[8px]"
                )} />
            <div className={cn(
                    "relative group flex items-center justify-center mx-3 h-[48px] bg-blue-500 w-full rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
                    params === path && "bg-primary/10 text-primary rounded-[16px] w-full"
                )}>
                {/* <Image fill src={imageUrl ?? '/dummy.avif'} alt="Cord"/> */}
                <p>{name}</p>
            </div>
            </button>
        </ActionToolTip>
    )
}

export default NavigationItem;