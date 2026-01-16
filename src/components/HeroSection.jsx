import { useEffect, useState } from "react";
import { ArrowDown, X } from "lucide-react";
// relative import used in the app build
import profilePic from "../assets/akash.png";
// local file (original you uploaded) for reference: /mnt/data/rithish img.jpg

export const HeroSection = () => {
  const [open, setOpen] = useState(false);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Clickable circular image */}
          <div className="flex justify-center opacity-0 animate-fade-in">
            <img
              src={profilePic}
              alt="Rithish Kumar"
              onClick={() => setOpen(true)}
              loading="lazy"
              className="
                w-48 h-48 
                md:w-56 md:h-56 
                rounded-full 
                object-cover 
                shadow-[0_0_25px_rgba(130,120,255,0.5)] 
                border border-white/20
                cursor-pointer
                hover:opacity-95
                transition-all duration-200
              "
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              AKASH 
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              V
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Passionate Cloud, DevOps, and Software Engineering professional with hands-on experience in AWS and Azure, CI/CD pipelines, infrastructure automation (Docker, Kubernetes, Terraform, Jenkins, GitHub Actions), along with strong programming fundamentals in Java, C, and SQL.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      {/* Modal: show full image when open */}
      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
          onClick={() => setOpen(false)} // click outside to close
          aria-modal="true"
          role="dialog"
        >
          {/* stop click propagation so clicking the image doesn't close */}
          <div
            className="relative max-w-[95%] max-h-[95%]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close image"
              className="absolute top-2 right-2 z-20 rounded-full bg-black/40 p-2 hover:bg-black/60"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Full image */}
            <img
              // use same imported file (this should point to the full-resolution file in your assets)
              src={profilePic}
              alt="Rithish Kumar — full"
              className="block max-w-full max-h-[80vh] rounded-lg object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
