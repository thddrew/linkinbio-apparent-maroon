// TODO: shared types with builder
export type SizeVariants = "sm" | "md" | "lg";

// Base props that are common to all variants
type BaseCardProps = {
  url?: string;
  title: string;
  newTab?: boolean;
  priority?: boolean;
  order?: number;
};

// Small card specific props
export type SmallCardProps = BaseCardProps & {
  size: "sm";
  description?: never; // Explicitly prevent description for small cards
} & (
    | { thumbnailImage: string; thumbnailEmoji?: never }
    | { thumbnailImage?: never; thumbnailEmoji: string }
    | { thumbnailImage?: never; thumbnailEmoji?: never }
  );

// Medium card specific props
export type MediumCardProps = BaseCardProps & {
  size: "md";
  description: string; // Required for medium cards
  buttonText?: string;
  buttonPosition?: "inline" | "end";
  onPreviewClick?: () => void;
  price?: number;
  currency?: string;
  polarProductId?: string;
  polarCheckoutLink?: string;
} & (
    | { thumbnailImage: string; thumbnailEmoji?: never }
    | { thumbnailImage?: never; thumbnailEmoji: string }
    | { thumbnailImage?: never; thumbnailEmoji?: never }
  );

export type CardProps = SmallCardProps | MediumCardProps;

export type Theme =
  | "basic"
  | "blackSneaker"
  | "calmingMint"
  | "construction"
  | "simplyBlack"
  | "whiteSneaker";

export type LinkCardTheme = {
  background: {
    className: string;
  };
  content: {
    className: string;
  };
  button: {
    className: string;
  };
  buttonPosition: "inline" | "end";
  thumbnailEmoji: {
    className: string;
  };
  thumbnailImage: {
    height?: number;
    width?: number;
    className: string;
  };
  cardImage?: {
    height?: number;
    width?: number;
    className: string;
  };
  cardEmoji?: {
    className: string;
  };
  font: {
    header: {
      className: string;
    };
    body: {
      className: string;
    };
  };
};

export type ThemeConfig = {
  container: {
    className: string;
  };
  profile: {
    avatar: {
      className: string;
      style: React.CSSProperties;
    };
    header: {
      className: string;
      style: React.CSSProperties;
    };
    description: {
      className: string;
      style: React.CSSProperties;
    };
  };
  socials: {
    icon: {
      width: number;
      height: number;
      color: string;
      className: string;
      style: React.CSSProperties;
    };
  };
  links: {
    sm: LinkCardTheme;
    md: LinkCardTheme & {
      preview?: LinkCardTheme;
    };
  } & LinkCardTheme;
  font: {
    header: {
      className: string;
    };
    body: {
      className: string;
    };
    button: {
      className: string;
    };
  };
};
