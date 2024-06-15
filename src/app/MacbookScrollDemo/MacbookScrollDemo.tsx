import React from "react";
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import Link from "next/link";

export function MacbookScrollDemo() {
    return (
        <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
            <MacbookScroll
               
                badge={
                    <Link href="#">
                    </Link>
                }
                src={`/ajay.jpg`}
                showGradient={false}
            />
        </div>
    );
}

