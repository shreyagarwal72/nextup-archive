import { useState } from "react";
import { FileCard, FileItem } from "@/components/FileCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Shield, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const vaultFiles: FileItem[] = [
  {
    id: "1",
    title: "Minecraft Skin",
    description: "Custom Minecraft player skin for your character",
    type: "image",
    url: "video/1.png",
    thumbnail: "video/1.png",
    isExternal: false,
  },
  {
    id: "2",
    title: "Minecraft Subscribe Video",
    description: "Promotional video for Minecraft content",
    type: "video",
    url: "video/2.mp4",
    thumbnail: "video/2.mp4",
    isExternal: false,
  },
  {
    id: "3",
    title: "My Editing App",
    description: "Custom video editing application",
    type: "apk",
    url: "https://www.mediafire.com/file/bydg1es9bew4649/base.apk/file",
    isExternal: true,
  },
  {
    id: "4",
    title: "🎥 Top Video Editing",
    description: "Professional video editing tool - Shotcut APK",
    type: "apk",
    url: "https://www.mediafire.com/file/6jj0ku6dz6sq8xy/Shotcut.apk/file",
    isExternal: true,
  },
  {
    id: "5",
    title: "My Editing Assets",
    description: "Collection of video editing resources and templates",
    type: "drive",
    url: "https://drive.google.com/drive/folders/1C3-5UJ6aeTXC9LnXdvXwMM8iT87e9zfZ",
    isExternal: true,
  },
  {
    id: "6",
    title: "Fav Telegram Channel",
    description: "Tech Insider Ashish - Latest tech updates and tips",
    type: "telegram",
    url: "https://t.me/techinsiderashish1",
    isExternal: true,
  },
  {
    id: "7",
    title: "Unlimited Entertainment Anime App",
    description: "MovieBox Premium - Stream unlimited anime and movies",
    type: "app",
    url: "https://cloud.9mod.com/MovieBox/MovieBox%20v3.0.05.0711.03%20%28Premium%29.apk",
    isExternal: true,
  },
  {
    id: "8",
    title: "🎬✨ Unlimited Anime App",
    description: "Base anime streaming application",
    type: "apk",
    url: "video/base.apk",
    isExternal: false,
  },
  {
    id: "9",
    title: "📺 Unlimited Live TV for Android TV & Phone",
    description: "Live TV streaming app for Android devices",
    type: "app",
    url: "https://www.mediafire.com/file/0s4rqywxv9zvgyt/base.apk/file",
    isExternal: true,
  },
];

const Vault = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredFiles = vaultFiles.filter((file) => {
    const matchesSearch = file.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         file.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || file.type === selectedType;
    return matchesSearch && matchesType;
  });

  const fileTypes = [
    { value: "all", label: "All Files", count: vaultFiles.length },
    { value: "image", label: "Images", count: vaultFiles.filter(f => f.type === "image").length },
    { value: "video", label: "Videos", count: vaultFiles.filter(f => f.type === "video").length },
    { value: "apk", label: "APKs", count: vaultFiles.filter(f => f.type === "apk").length },
    { value: "app", label: "Apps", count: vaultFiles.filter(f => f.type === "app").length },
    { value: "drive", label: "Drive", count: vaultFiles.filter(f => f.type === "drive").length },
    { value: "telegram", label: "Telegram", count: vaultFiles.filter(f => f.type === "telegram").length },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-vault-gradient opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(263_85%_65%_/_0.1),transparent_70%)]" />
        
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Secure Vault</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-vault-gradient bg-clip-text text-transparent mb-4">
            💎 Nextup Studio Vault
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Exclusive content and resources are available here. Your premium digital vault for apps, assets, and entertainment.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4" />
            <span>{vaultFiles.length} Premium Resources Available</span>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search vault contents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/50 border-border focus:border-primary"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {fileTypes.map((type) => (
              <Button
                key={type.value}
                variant={selectedType === type.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type.value)}
                className={cn(
                  "transition-all duration-200",
                  selectedType === type.value && "bg-vault-gradient hover:opacity-90"
                )}
              >
                {type.label}
                <span className="ml-2 text-xs bg-background/20 px-1.5 py-0.5 rounded">
                  {type.count}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Files Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredFiles.map((file, index) => (
            <FileCard
              key={file.id}
              file={file}
              className={cn(
                "animate-vault-float",
                `[animation-delay:${index * 100}ms]`
              )}
            />
          ))}
        </div>

        {filteredFiles.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">No files found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="text-sm text-muted-foreground">
            © 2025 <span className="font-semibold text-primary">Nextup Studio</span>. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Vault;