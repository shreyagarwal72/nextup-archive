import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Play, Image, Smartphone, Tv, FolderOpen, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FileItem {
  id: string;
  title: string;
  description?: string;
  type: 'image' | 'video' | 'apk' | 'link' | 'drive' | 'telegram' | 'app';
  url: string;
  isExternal?: boolean;
  thumbnail?: string;
}

interface FileCardProps {
  file: FileItem;
  className?: string;
  style?: React.CSSProperties;
}

const getFileIcon = (type: string) => {
  switch (type) {
    case 'image':
      return Image;
    case 'video':
      return Play;
    case 'apk':
    case 'app':
      return Smartphone;
    case 'drive':
      return FolderOpen;
    case 'telegram':
      return MessageCircle;
    case 'link':
    default:
      return ExternalLink;
  }
};

const getFileTypeColor = (type: string) => {
  switch (type) {
    case 'image':
      return 'text-emerald-400 group-hover:text-emerald-300';
    case 'video':
      return 'text-red-400 group-hover:text-red-300';
    case 'apk':
    case 'app':
      return 'text-blue-400 group-hover:text-blue-300';
    case 'drive':
      return 'text-amber-400 group-hover:text-amber-300';
    case 'telegram':
      return 'text-cyan-400 group-hover:text-cyan-300';
    case 'link':
    default:
      return 'text-primary group-hover:text-primary/80';
  }
};

export const FileCard = ({ file, className, style }: FileCardProps) => {
  const Icon = getFileIcon(file.type);
  const iconColor = getFileTypeColor(file.type);

  const handleClick = () => {
    if (file.isExternal) {
      window.open(file.url, '_blank');
    } else {
      const link = document.createElement('a');
      link.href = file.url;
      link.download = file.title;
      link.click();
    }
  };

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden border-vault-border-glow/30 backdrop-blur-vault bg-vault-glass-3d",
        "hover:bg-vault-card-hover hover:shadow-vault-3d-hover hover:border-vault-border-glow",
        "transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-2",
        "shadow-vault-3d transform-gpu perspective-1000",
        "hover:rotate-x-2 hover:rotate-y-2",
        "before:absolute before:inset-0 before:bg-vault-gradient-subtle before:opacity-0",
        "before:transition-opacity before:duration-500 hover:before:opacity-100",
        "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/5 after:to-transparent",
        "after:translate-x-[-100%] after:animate-vault-shimmer after:duration-[2s]",
        "animate-vault-card-3d hover:animate-vault-3d-float",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        ...style
      }}
    >
      <div className="relative z-10 p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className={cn(
              "p-3 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/10",
              "group-hover:bg-secondary/50 group-hover:scale-110 group-hover:rotate-3",
              "transition-all duration-300 ease-out shadow-lg",
              iconColor
            )}>
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300 truncate text-lg">
                {file.title}
              </h3>
              {file.description && (
                <p className="text-sm text-muted-foreground/80 mt-1 line-clamp-2 leading-relaxed">
                  {file.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {file.thumbnail && file.type === 'image' && (
          <div className="aspect-video rounded-xl overflow-hidden bg-secondary/10 border border-white/10 relative">
            <img 
              src={file.thumbnail} 
              alt={file.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        {file.thumbnail && file.type === 'video' && (
          <div className="aspect-video rounded-xl overflow-hidden bg-secondary/10 border border-white/10 relative group/video">
            <video 
              src={file.thumbnail}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              muted
              loop
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover/video:opacity-0 transition-opacity duration-300">
              <div className="bg-black/60 backdrop-blur-sm rounded-full p-4 border border-white/20">
                <Play className="h-8 w-8 text-white fill-white" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        )}

        <Button
          onClick={handleClick}
          className={cn(
            "w-full bg-vault-gradient hover:opacity-90 text-white border-0",
            "shadow-vault-glow hover:shadow-vault-glow-hover",
            "transition-all duration-300 ease-out hover:scale-105",
            "relative overflow-hidden group/btn",
            "before:absolute before:inset-0 before:bg-gradient-to-r",
            "before:from-transparent before:via-white/20 before:to-transparent",
            "before:translate-x-[-100%] hover:before:translate-x-[100%]",
            "before:transition-transform before:duration-700"
          )}
          size="lg"
        >
          <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
            {file.isExternal ? (
              <>
                <ExternalLink className="h-4 w-4" />
                Open Link
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                Download
              </>
            )}
          </span>
        </Button>
      </div>
    </Card>
  );
};