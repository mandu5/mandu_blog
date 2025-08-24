"use client";

import { useCallback, useEffect, useState } from "react";
import { getLikeInfo, toggleLike, getCommentCount } from "@/lib/utils";

export interface PostEngagementState {
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  isClient: boolean;
  isLoading: boolean;
  error?: string;
}

/**
 * usePostEngagement
 * Manages likes and comment counts for a blog post with polling updates.
 * Provides an imperative toggleLike handler.
 */
export function usePostEngagement(postId: string, pollMs: number = 5000) {
  const [state, setState] = useState<PostEngagementState>({
    likeCount: 0,
    commentCount: 0,
    isLiked: false,
    isClient: false,
    isLoading: true,
  });

  // Initial mount: mark client and load engagement
  useEffect(() => {
    setState((s) => ({ ...s, isClient: true }));
  }, []);

  const load = useCallback(async () => {
    try {
      const likeInfo = await getLikeInfo(postId);
      const commentCount = getCommentCount(postId);
      setState((s) => ({
        ...s,
        likeCount: likeInfo.count,
        isLiked: likeInfo.isLiked,
        commentCount,
        isLoading: false,
        error: undefined,
      }));
    } catch (err) {
      setState((s) => ({ ...s, isLoading: false, error: "Failed to load engagement" }));
    }
  }, [postId]);

  useEffect(() => {
    if (!state.isClient) return;
    load();
    const interval = window.setInterval(load, pollMs);
    return () => window.clearInterval(interval);
  }, [state.isClient, load, pollMs]);

  const onToggleLike = useCallback(async () => {
    try {
      const result = await toggleLike(postId);
      setState((s) => ({ ...s, isLiked: result.isLiked, likeCount: result.count }));
    } catch (err) {
      setState((s) => ({ ...s, error: "Failed to toggle like" }));
    }
  }, [postId]);

  return { ...state, load, onToggleLike } as const;
}

export default usePostEngagement;


