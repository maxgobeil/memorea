import { Mail, Instagram, Facebook, Heart, Sparkles } from "lucide-react";
import { ModeToggle } from "../components/mode-toggle";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="flex justify-center">
            <img
              src="/src/assets/logo-pink.png"
              alt="Memorea"
              width={150}
              height={150}
            />
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#E91E8C] via-[#F06292] to-[#FFC0CB] bg-clip-text text-transparent"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            MEMOREA
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
            Transformez vos photos en magnifiques aimants
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Des aimants photos personnalisés fabriqués avec amour par Andrea
          </p>
          <span className="text-primary font-semibold text-4xl">
            Bientôt disponible!
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Haute qualité</h3>
              <p className="text-sm text-muted-foreground">
                Aimants glacés professionnels de 2 pouces
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Fait avec amour</h3>
              <p className="text-sm text-muted-foreground">
                Créé à la main par Andrea, jeune entrepreneure de 9 ans
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Livraison rapide</h3>
              <p className="text-sm text-muted-foreground">
                Expédié du Québec en 3 à 5 jours
              </p>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">
              Suivez-nous pour les nouveautés :
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.instagram.com/memorea.print/"
                className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Suivez-nous sur Instagram"
              >
                <Instagram className="w-6 h-6 text-primary" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61583149323454"
                className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook className="w-6 h-6 text-primary" />
              </a>
              <a
                href="mailto:contact@memorea.ca"
                className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Écrivez-nous"
              >
                <Mail className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-6 px-6 text-center text-sm text-muted-foreground border-t">
        <p>© 2025 Memorea par Andrea. Fait avec 💖 au Québec, Canada.</p>
      </footer>
    </div>
  );
}
