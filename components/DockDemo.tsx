import React from "react";
import { Dock, DockIcon } from "./ui/dock";
import { Github, HardDrive, StickyNote, MessageCircle } from "lucide-react";

export function DockDemo() {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <h3 className="text-slate-500 text-sm font-medium mb-2 uppercase tracking-widest">Quick Links</h3>
            <Dock direction="middle" className="border-slate-800 bg-slate-900/50">
                <DockIcon className="bg-slate-800 hover:bg-slate-700 transition-colors">
                    <Github className="size-6 text-slate-200" />
                </DockIcon>
                <DockIcon className="bg-slate-800 hover:bg-slate-700 transition-colors">
                    <HardDrive className="size-6 text-slate-200" />
                </DockIcon>
                <DockIcon className="bg-slate-800 hover:bg-slate-700 transition-colors">
                    <StickyNote className="size-6 text-slate-200" />
                </DockIcon>
                <DockIcon className="bg-slate-800 hover:bg-slate-700 transition-colors">
                    <MessageCircle className="size-6 text-slate-200" />
                </DockIcon>
            </Dock>
        </div>
    );
}
