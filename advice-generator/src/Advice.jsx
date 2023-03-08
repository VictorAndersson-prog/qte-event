import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./Advice.css";
export default function Advice() {
    const { data: advice, refetch } = useQuery({
        queryKey: ["advice"],
        queryFn: () =>
            fetch("https://api.adviceslip.com/advice").then((data) =>
                data.json()
            ),
    });

    return (
        <div className="advice-container">
            <p className="advice-number">
                ADVICE #{advice ? advice.slip.id : ""}
            </p>
            <h1 className="advice">
                "{advice ? advice.slip.advice : "Loading..."}"
            </h1>
            <div className="breakpoint">
                <img
                    src="/images/pattern-divider-desktop.svg"
                    alt="breakpoint"
                />
            </div>
            <div className="button-container">
                <button className="advice-roll" onClick={() => refetch()}>
                    <img src="/images/icon-dice.svg" alt="dice" />
                </button>
            </div>
        </div>
    );
}
