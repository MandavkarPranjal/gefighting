"use client";

import React from "react";
import {
    BannedIcon,
    DangerIcon,
    FaceIDIcon,
    LockIcon,
    PassIcon,
    PhraseIcon,
    RecoveryPhraseIcon,
    ShieldIcon,
    WarningIcon,
} from "./icons";
import clsx from "clsx";

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
};

type HeaderProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

type ViewProps = {
    setView: (view: string) => void;
};

type SafetyTip = {
    icon: React.ReactNode;
    text: string;
};

type SafetyViewProps = ViewProps & {
    icon: React.ReactNode;
    title: string;
    description: string;
    tips: SafetyTip[];
};

export function Button({ children, onClick }: ButtonProps) {
    return (
        <button
            data-vaul-no-drag=""
            className=" flex h-12 w-full items-center gap-[15px] rounded-[16px] bg-[#F7F8F9] px-4 text-[17px] font-semibold text-[#222222] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-95 md:font-medium"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export function SecondaryButton({ children, onClick, className }: ButtonProps) {
    return (
        <button
            data-vaul-no-drag=""
            className={clsx(
                "flex h-12 w-full items-center justify-center gap-[15px] rounded-full text-center text-[19px] font-semibold transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-95 md:font-medium",
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export function Header({ icon, title, description }: HeaderProps) {
    return (
        <header className="mt-[21px]">
            {icon}
            <h2 className="mt-2.5 text-[22px] font-semibold text-[#222222] md:font-medium">
                {title}
            </h2>

            <p className="mt-3 text-[17px] font-medium leading-[24px] text-[#999999] md:font-normal">
                {description}
            </p>
        </header>
    );
}

function SafetyView({ setView, icon, title, description, tips }: SafetyViewProps) {
    return (
        <div>
            <div className="px-2">
                <Header
                    icon={icon}
                    title={title}
                    description={description}
                />
                <ul className="mt-6 space-y-4 border-t border-[#F5F5F5] pt-6">
                    {tips.map((tip, index) => (
                        <li key={index} className="flex items-center gap-3 text-[15px] font-semibold text-[#999999] md:font-medium">
                            {tip.icon}
                            {tip.text}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-7 flex gap-4">
                <SecondaryButton
                    onClick={() => setView("default")}
                    className="bg-[#F0F2F4] text-[#222222]"
                >
                    Cancel
                </SecondaryButton>
                <SecondaryButton
                    onClick={() => setView("default")}
                    className="bg-[#4DAFFF] text-[#FFFFFF]"
                >
                    <FaceIDIcon />
                    Reveal
                </SecondaryButton>
            </div>
        </div>
    );
}

export function Phrase({ setView }: ViewProps) {
    return (
        <SafetyView
            setView={setView}
            icon={<RecoveryPhraseIcon />}
            title="Secret Recovery Phrase"
            description="Your Secret Recovery Phrase is the key used to back up your wallet. Keep it secret at all times."
            tips={[
                { icon: <ShieldIcon />, text: "Keep your Secret Phrase safe" },
                { icon: <PassIcon />, text: "Don't share it with anyone else" },
                { icon: <BannedIcon />, text: "If you lose it, we can't recover it" }
            ]}
        />
    );
}

export function Key({ setView }: ViewProps) {
    return (
        <SafetyView
            setView={setView}
            icon={<RecoveryPhraseIcon />}
            title="Private Key"
            description="Your Private Key is the key used to back up your wallet. Keep it secret and secure at all times."
            tips={[
                { icon: <ShieldIcon />, text: "Keep your private key safe" },
                { icon: <PassIcon />, text: "Don't share it with anyone else" },
                { icon: <BannedIcon />, text: "If you lose it, we can't recover it" }
            ]}
        />
    );
}

export function RemoveWallet({ setView }: ViewProps) {
    return (
        <div>
            <div className="px-2">
                <Header
                    icon={<DangerIcon />}
                    title="Are you sure?"
                    description="You haven’t backed up your wallet yet. If you remove it, you could lose access forever. We suggest tapping and backing up your wallet first with a valid recovery method."
                />
                <div className="mt-7 flex gap-4">
                    <SecondaryButton
                        onClick={() => setView("default")}
                        className="bg-[#F0F2F4] text-[#222222]"
                    >
                        Cancel
                    </SecondaryButton>
                    <SecondaryButton
                        onClick={() => setView("default")}
                        className="bg-[#FF3F40] text-[#FFFFFF]"
                    >
                        Continue
                    </SecondaryButton>
                </div>
            </div>
        </div>
    );
}

export function DefaultView({ setView }: ViewProps) {
    return (
        <>
            <header className="mb-4 flex h-[72px] items-center border-b border-[#F7F7F7] pl-2">
                <h2 className="text-[19px] font-semibold text-[#222222] md:font-medium">
                    Options
                </h2>
            </header>
            <div className="space-y-3">
                <Button
                    onClick={() => {
                        setView("key");
                    }}
                >
                    <LockIcon />
                    View Private Key
                </Button>
                <Button
                    onClick={() => {
                        setView("phrase");
                    }}
                >
                    <PhraseIcon />
                    View Recovery Phase
                </Button>
                <button
                    className="flex h-12 w-full items-center gap-[15px] rounded-[16px] bg-[#FFF0F0] px-4 text-[17px] font-semibold text-[#FF3F40] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-95 md:font-medium"
                    onClick={() => {
                        setView("remove");
                    }}
                >
                    <WarningIcon />
                    Remove Wallet
                </button>
            </div>
        </>
    );
}
