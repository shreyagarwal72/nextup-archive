import { useState } from "react";
import { FileCard, FileItem } from "@/components/FileCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Shield, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const vaultFiles: FileItem[] = [
  {
    id: "1",
    title: "All Sound effect",
    description: "Complete collection of sound effects for video editing and content creation",
    type: "drive",
    url: "https://drive.google.com/drive/folders/1u6cDD5SpUC0M3eiDdYgalNvt58vKucgs",
    isExternal: true,
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
  {
    id: "10",
    title: "🎓 All Premium Courses",
    description: "Complete collection of premium educational courses and tutorials",
    type: "drive",
    url: "https://drive.google.com/drive/folders/1RpqtuQzlgO3HVfl5-cQpjOBbuxtXw-8a",
    isExternal: true,
  },
  {
    id: "11",
    title: "Ai unlimited Prompt Book",
    description: "Comprehensive collection of AI prompts for various use cases",
    type: "drive",
    url: "https://docs.google.com/spreadsheets/d/1OP8oUzIOFkSCYTst43Y9mmasYvdbQkCKIJiQEa_qm-0/edit?usp=drivesdk",
    isExternal: true,
  },
];

const Vault = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFiles = vaultFiles.filter((file) => {
    const matchesSearch = file.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         file.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="relative bg-vault-backdrop border-b border-vault-border-glow/10 overflow-hidden">
        <div className="absolute inset-0 bg-vault-mesh opacity-30 animate-vault-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-20 md:py-28 text-center relative z-10">
          <div className="flex items-center justify-center gap-5 mb-10 animate-fade-in">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-vault-gradient rounded-3xl flex items-center justify-center shadow-vault-3d animate-vault-pulse-glow">
              <Shield className="h-7 w-7 md:h-8 md:w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-vault-gradient bg-clip-text text-transparent tracking-tight">
              💎 Nextup Studio Vault
            </h1>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            Your premium digital asset collection featuring exclusive apps, editing resources, and creative tools
          </p>
          <div className="flex items-center justify-center gap-3 text-base md:text-lg text-muted-foreground/70 animate-fade-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="font-semibold">{vaultFiles.length} Premium Resources Available</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vault-border-glow to-transparent opacity-50" />
      </header>

      {/* Search Section */}
      <main className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto mb-16 animate-fade-in-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground/60 group-focus-within:text-primary transition-all duration-300 group-focus-within:scale-110" />
            <Input
              placeholder="Search for apps, tools, and resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-16 pr-6 py-7 bg-vault-glass-3d backdrop-blur-vault border-vault-border-glow/20 
                focus:border-vault-border-glow focus:shadow-vault-glow-hover focus:bg-vault-glass 
                transition-all duration-500 text-lg rounded-3xl font-medium
                hover:border-vault-border-glow/50 hover:bg-vault-glass hover:shadow-vault-3d
                placeholder:text-muted-foreground/50"
            />
          </div>
        </div>

        {/* Files Grid */}
        <section 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-24" 
          style={{ perspective: "2000px" }} 
          aria-label="Digital resources collection"
        >
          {filteredFiles.map((file, index) => (
            <FileCard
              key={file.id}
              file={file}
              className={cn(
                "animate-scale-in [animation-delay:var(--animation-delay)] opacity-0 [animation-fill-mode:forwards]",
                "transform-gpu will-change-transform"
              )}
              style={{ 
                '--animation-delay': `${800 + index * 60}ms`,
                transformStyle: "preserve-3d"
              } as React.CSSProperties}
            />
          ))}
        </section>

        {filteredFiles.length === 0 && (
          <div className="text-center py-40 animate-fade-in">
            <div className="relative inline-block mb-12">
              <div className="text-[10rem] animate-bounce">🔍</div>
              <div className="absolute inset-0 bg-vault-gradient rounded-full blur-3xl opacity-40 animate-pulse" />
            </div>
            <h3 className="text-4xl font-black text-foreground mb-6">No Results Found</h3>
            <p className="text-muted-foreground/80 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Try adjusting your search terms to discover more premium resources from our collection
            </p>
            <Button 
              onClick={() => setSearchQuery("")}
              className="bg-vault-gradient hover:opacity-95 text-white border-0
                shadow-vault-glow hover:shadow-vault-glow-hover transform-gpu hover:scale-105 
                transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-95
                text-lg px-10 py-7 rounded-2xl font-bold"
            >
              Clear Search
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative border-t border-vault-border-glow/20 bg-vault-backdrop backdrop-blur-vault overflow-hidden">
        <div className="absolute inset-0 bg-vault-mesh opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
              <div className="w-12 h-12 bg-vault-gradient rounded-2xl flex items-center justify-center shadow-vault-3d animate-vault-pulse-glow">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black bg-vault-gradient bg-clip-text text-transparent tracking-tight">
                Nextup Studio
              </span>
            </div>
            <div className="text-base md:text-lg text-muted-foreground/80 space-y-3">
              <p>© 2025 <span className="font-bold text-primary">Nextup Studio</span>. All rights reserved.</p>
              <p className="text-sm text-muted-foreground/60 max-w-xl mx-auto leading-relaxed">
                Securing your digital assets with premium vault technology and professional tools
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vault-border-glow to-transparent opacity-50" />
      </footer>
    </div>
  );
};

export default Vault;