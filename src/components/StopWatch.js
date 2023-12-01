import React, { useState } from 'react';
import styles from '../styles/stopWatch.module.css';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function StopWatch() {
    const [stopWatchMode, setStopWatchMode] = useState(false);

    return (
        <div className={styles.switchContainer}>
            <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="stopWatch-mode">Stop Watch Mode</Label>
            </div>
        </div>
    );
}
