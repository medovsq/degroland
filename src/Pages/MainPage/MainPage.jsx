import React from "react";
import styles from './styles.module.css'
import { MainPageHeader } from "../../Components/MainPageHeader/MainPageHeader";
import { MainPageBody } from "../../Components/MainPageBody/MainPageBody";
import { Background } from "../../Components/Background/Background";

export function MainPage() {
    return (
        <>
            <div className={styles.navBarPos}><MainPageHeader /></div>
            <Background />
            <MainPageBody className={styles.mainBody} />

        </>
    )
}