export type Video = {
    data?:       Data;
    extensions?: Extensions;
}

export type Data = {
    xdt_shortcode_media?: XdtShortcodeMedia;
}

export type XdtShortcodeMedia = {
    __typename?:                      IsXdtGraphMediaInterface;
    __isXDTGraphMediaInterface?:      IsXdtGraphMediaInterface;
    id?:                              string;
    shortcode?:                       string;
    thumbnail_src?:                   string;
    dimensions?:                      Dimensions;
    gating_info?:                     null;
    fact_check_overall_rating?:       null;
    fact_check_information?:          null;
    sensitivity_friction_info?:       null;
    sharing_friction_info?:           SharingFrictionInfo;
    media_overlay_info?:              null;
    media_preview?:                   string;
    display_url?:                     string;
    display_resources?:               DisplayResource[];
    accessibility_caption?:           null;
    dash_info?:                       DashInfo;
    has_audio?:                       boolean;
    video_url?:                       string;
    video_view_count?:                number;
    video_play_count?:                number;
    encoding_status?:                 null;
    is_published?:                    boolean;
    product_type?:                    string;
    title?:                           string;
    video_duration?:                  number;
    clips_music_attribution_info?:    ClipsMusicAttributionInfo;
    is_video?:                        boolean;
    tracking_token?:                  string;
    upcoming_event?:                  null;
    edge_media_to_tagged_user?:       EdgeMediaToCaptionClass;
    owner?:                           XdtShortcodeMediaOwner;
    edge_media_to_caption?:           EdgeMediaToCaptionClass;
    can_see_insights_as_brand?:       boolean;
    caption_is_edited?:               boolean;
    has_ranked_comments?:             boolean;
    like_and_view_counts_disabled?:   boolean;
    edge_media_to_parent_comment?:    EdgeMediaToParentCommentClass;
    edge_media_to_hoisted_comment?:   EdgeMediaToCaptionClass;
    edge_media_preview_comment?:      EdgeMediaPreview;
    comments_disabled?:               boolean;
    commenting_disabled_for_viewer?:  boolean;
    taken_at_timestamp?:              number;
    edge_media_preview_like?:         EdgeMediaPreview;
    edge_media_to_sponsor_user?:      EdgeMediaToCaptionClass;
    is_affiliate?:                    boolean;
    is_paid_partnership?:             boolean;
    location?:                        null;
    nft_asset_info?:                  null;
    viewer_has_liked?:                boolean;
    viewer_has_saved?:                boolean;
    viewer_has_saved_to_collection?:  boolean;
    viewer_in_photo_of_you?:          boolean;
    viewer_can_reshare?:              boolean;
    is_ad?:                           boolean;
    edge_web_media_to_related_media?: EdgeMediaToCaptionClass;
    coauthor_producers?:              any[];
    pinned_for_users?:                any[];
    edge_related_profiles?:           EdgeRelatedProfiles;
}

export enum IsXdtGraphMediaInterface {
    XDTGraphImage = "XDTGraphImage",
    XDTGraphSidecar = "XDTGraphSidecar",
    XDTGraphVideo = "XDTGraphVideo",
}

export type ClipsMusicAttributionInfo = {
    artist_name?:              string;
    song_name?:                string;
    uses_original_audio?:      boolean;
    should_mute_audio?:        boolean;
    should_mute_audio_reason?: string;
    audio_id?:                 string;
}

export type DashInfo = {
    is_dash_eligible?:    boolean;
    video_dash_manifest?: null;
    number_of_qualities?: number;
}

export type Dimensions = {
    height?: number;
    width?:  number;
}

export type DisplayResource = {
    src?:           string;
    config_width?:  number;
    config_height?: number;
}

export type EdgeMediaPreview = {
    count?: number;
    edges?: EdgeMediaPreviewCommentEdge[];
}

export type EdgeMediaToParentCommentClass = {
    count?:     number;
    page_info?: PageInfo;
    edges?:     EdgeMediaPreviewCommentEdge[];
}

export type PurpleNode = {
    id?:                     string;
    text?:                   string;
    created_at?:             number;
    did_report_as_spam?:     boolean;
    owner?:                  PurpleOwner;
    viewer_has_liked?:       boolean;
    edge_liked_by?:          EdgeFollowedByClass;
    is_restricted_pending?:  boolean;
    edge_threaded_comments?: EdgeMediaToParentCommentClass;
}

export type EdgeMediaPreviewCommentEdge = {
    node?: PurpleNode;
}

export type PageInfo = {
    has_next_page?: boolean;
    end_cursor?:    null;
}

export type EdgeFollowedByClass = {
    count?: number;
}

export type PurpleOwner = {
    id?:              string;
    is_verified?:     boolean;
    profile_pic_url?: string;
    username?:        string;
}

export type EdgeMediaToCaptionClass = {
    edges?: EdgeMediaToCaptionEdge[];
}

export type EdgeMediaToCaptionEdge = {
    node?: FluffyNode;
}

export type FluffyNode = {
    created_at?: string;
    text?:       string;
    id?:         string;
}

export type EdgeRelatedProfiles = {
    edges?: EdgeRelatedProfilesEdge[];
}

export type EdgeRelatedProfilesEdge = {
    node?: TentacledNode;
}

export type TentacledNode = {
    id?:                           string;
    full_name?:                    string;
    is_private?:                   boolean;
    is_verified?:                  boolean;
    profile_pic_url?:              string;
    username?:                     string;
    edge_followed_by?:             EdgeFollowedByClass;
    edge_owner_to_timeline_media?: EdgeOwnerToTimelineMedia;
}

export type EdgeOwnerToTimelineMedia = {
    count?: number;
    edges?: EdgeOwnerToTimelineMediaEdge[];
}

export type EdgeOwnerToTimelineMediaEdge = {
    node?: StickyNode;
}

export type StickyNode = {
    __typename?:                 IsXdtGraphMediaInterface;
    id?:                         string;
    shortcode?:                  string;
    edge_media_preview_like?:    EdgeFollowedByClass;
    edge_media_preview_comment?: EdgeFollowedByClass;
    thumbnail_src?:              string;
    owner?:                      FluffyOwner;
    gating_info?:                null;
    sharing_friction_info?:      SharingFrictionInfo;
    media_overlay_info?:         null;
    is_video?:                   boolean;
    accessibility_caption?:      null;
}

export type FluffyOwner = {
    id?:       string;
    username?: string;
}

export type SharingFrictionInfo = {
    should_have_sharing_friction?: boolean;
    bloks_app_url?:                null;
}

export type XdtShortcodeMediaOwner = {
    id?:                           string;
    username?:                     string;
    is_verified?:                  boolean;
    profile_pic_url?:              string;
    blocked_by_viewer?:            boolean;
    restricted_by_viewer?:         null;
    followed_by_viewer?:           boolean;
    full_name?:                    string;
    has_blocked_viewer?:           boolean;
    is_embeds_disabled?:           boolean;
    is_private?:                   boolean;
    is_unpublished?:               boolean;
    requested_by_viewer?:          boolean;
    pass_tiering_recommendation?:  boolean;
    edge_owner_to_timeline_media?: EdgeFollowedByClass;
    edge_followed_by?:             EdgeFollowedByClass;
}

export type Extensions = {
    is_final?: boolean;
}
