/**
 * This file was generated from VideoPlayer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, NativeImage } from "mendix";

export interface VideoPlayerProps<Style> {
    name: string;
    style: Style[];
    videoUrl: DynamicValue<string>;
    autoStart: boolean;
    muted: boolean;
    loop: boolean;
    UserEpisodeGuid: DynamicValue<string>;
    LastFrameWatched: DynamicValue<string>;
    aspectRatio: boolean;
    showControls: boolean;
    PosterURL?: DynamicValue<string>;
    PauseStateLogo?: DynamicValue<NativeImage>;
    LoadingStateAnim?: DynamicValue<NativeImage>;
    LoadingStateAnimWidth: number;
    LoadingStateAnimHeight: number;
}

export interface VideoPlayerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    videoUrl: string;
    autoStart: boolean;
    muted: boolean;
    loop: boolean;
    UserEpisodeGuid: string;
    LastFrameWatched: string;
    aspectRatio: boolean;
    showControls: boolean;
    PosterURL: string;
    PauseStateLogo: { type: "static"; imageUrl: string; } | { type: "dynamic"; entity: string; } | null;
    LoadingStateAnim: { type: "static"; imageUrl: string; } | { type: "dynamic"; entity: string; } | null;
    LoadingStateAnimWidth: number | null;
    LoadingStateAnimHeight: number | null;
}
