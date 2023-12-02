import React from 'react';
import styles from '../styles/index.module.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function Info() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <InfoOutlinedIcon className={styles.infoIcon} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>About this Project</DialogTitle>
                    <DialogDescription>
                        <p style={{ paddingTop: "5px" }}>This is a fun project created by <a href='https://github.com/timothymaxwellsummers' className={styles.linkStyle}>@timsum</a> using React, Next.js and <a>shadcn</a> components. The source code is available on <a>GitHub</a>.</p>
                        <p style={{ paddingTop: "5px" }}>Was trying to improve my designing and coding skills. 🤓</p>
                        <p style={{ paddingTop: "5px" }}>I use this watch in stop watch mode to time my workouts. More watch faces and features coming soon...<br /> Stay tuned! 🎸</p>
                    </DialogDescription>
                </DialogHeader>
                <DialogTitle>Settings</DialogTitle>
                <div className="flex items-center space-x-2">
                    <Switch id="stopWatch-mode" />
                    <Label htmlFor="stopWatch-mode" style={{ paddingLeft: "10px" }}>Stop Watch Mode</Label>
                </div>
            </DialogContent>
        </Dialog>
    );
}
