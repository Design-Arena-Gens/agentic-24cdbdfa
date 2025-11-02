'use client';

import { useState } from 'react';

interface PromptVariation {
  id: number;
  title: string;
  category: string;
  prompt: string;
  specs: string[];
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const prompts: PromptVariation[] = [
    {
      id: 1,
      title: "Η Κλασική Μονρόε",
      category: "hollywood",
      prompt: `ULTRA-REALISTIC EDITORIAL FASHION PHOTOGRAPHY
Marilyn Monroe inspired campaign for ALOHA Nails Greece

TECHNICAL SPECS:
• Camera: Canon EOS R3 + Leica Summilux 50mm f/1.4
• Settings: f/1.4, ISO 100, 1/200s (golden-hour)
• Format: 8K RAW, cinematic color grading
• Style: Vogue 1950s meets modern editorial

MODEL & SCENE:
Marilyn Monroe (age 29) on luxury Athens rooftop
• Signature blonde curls, red lipstick, beauty marks
• Emerald-green silk gown, diamond bracelet
• Pose: Hand extended showing nails, holding champagne
• Background: Acropolis view at sunset, soft bokeh

NAILS (PRIMARY FOCUS):
• Polish: ALOHA Lavender Violet (AF134/MG172/A8134)
• Shape: Classic almond, medium-long
• Finish: Ultra-high gloss with holographic shimmer
• Lighting: Butterfly lighting emphasizing nail curvature
• Details: Nails catching golden-hour reflections

CALL TO ACTION:
"SHOP NOW - ALOHANAILS.GR"
"Επαγγελματική Ομορφιά, Ελληνική Κομψότητα"
Font: Didot Italic, gold foil effect

TARGET: Greek nail technicians & salon owners (18-50)
MOOD: Timeless luxury, professional excellence`,
      specs: [
        "8K Resolution",
        "Golden Hour Lighting",
        "Greek Location",
        "Professional Focus"
      ]
    },
    {
      id: 2,
      title: "Μοντέρνο Ελληνικό Nail Salon",
      category: "salon",
      prompt: `HYPER-REALISTIC NAIL SALON EDITORIAL
Contemporary Greek luxury salon for ALOHA Nails

TECHNICAL SETUP:
• Camera: Sony A7R V + 85mm f/1.4 GM
• Settings: f/2.0, ISO 400, 1/125s
• Lighting: Soft box + rim light for dimension
• Style: Modern minimalist with Mediterranean touches

SCENE COMPOSITION:
Luxurious Athenian nail salon interior
• Marble countertops, gold accents, white aesthetics
• Professional nail technician (Greek woman, 28-35)
• Client seated, hands on velvet cushion
• Background: Organized ALOHA product display

HANDS & NAILS:
• Technician applying ALOHA Ruby Red polish
• Client nails: ALOHA Lavender Violet (freshly done)
• Perfect cuticles, professional manicure technique
• Close-up: Brush stroke mid-application
• Product bottles visible with ALOHA branding

PROFESSIONAL DETAILS:
• Clean workspace, sterilized tools
• ALOHA color chart in background
• Professional lamp illuminating work area
• Subtle Greek flag or Parthenon art on wall

CTA & BRANDING:
"ALOHANAILS.GR - Προμηθευτής Επαγγελματιών"
"Ποιότητα που Εμπιστεύονται οι Experts"

TARGET: Nail salon owners & technicians
MOOD: Professional, trustworthy, aspirational`,
      specs: [
        "Salon Interior",
        "Professional Action",
        "Product Focus",
        "Greek Branding"
      ]
    },
    {
      id: 3,
      title: "Santorini Sunset Glamour",
      category: "lifestyle",
      prompt: `EDITORIAL LIFESTYLE PHOTOGRAPHY
Greek Island luxury campaign for ALOHA Nails

CAMERA SPECS:
• Nikon Z9 + 50mm f/1.2 S
• Settings: f/1.8, ISO 200, 1/250s
• Time: Blue hour (30 min after sunset)
• Style: Fashion editorial meets travel luxury

LOCATION & MODEL:
Santorini cliffside terrace, white architecture
• Model: Greek woman (25-35), elegant summer dress
• White flowing fabric, gold jewelry
• Pose: Leaning on balcony, nails toward camera
• Background: Blue domed churches, caldera view

NAIL SHOWCASE:
• Polish: ALOHA Coral Sunset + Lavender Violet (accent nail)
• Shape: Elegant stiletto, medium length
• Finish: High-gloss with sunset reflections
• Composition: Nails framing Aegean Sea view
• Details: Mediterranean twilight on polish

GREEK LUXURY ELEMENTS:
• Cocktail with olive branch garnish
• White & blue color palette (Greek flag inspiration)
• Bougainvillea flowers in frame
• Authentic Greek aesthetic

MARKETING TEXT:
"ALOHA NAILS - Ελληνική Ομορφιά, Παγκόσμια Ποιότητα"
"Από το Αιγαίο στο Salon σας - ALOHANAILS.GR"

TARGET: Aspirational nail techs, salon owners
MOOD: Vacation luxury, Mediterranean elegance`,
      specs: [
        "Santorini Location",
        "Lifestyle Editorial",
        "Greek Color Palette",
        "Aspirational Content"
      ]
    },
    {
      id: 4,
      title: "Επαγγελματική Εκπαίδευση",
      category: "educational",
      prompt: `PROFESSIONAL EDUCATIONAL PHOTOGRAPHY
Nail technician training editorial for ALOHA Nails Greece

TECHNICAL SETTINGS:
• Camera: Canon EOS R5 + 100mm f/2.8 Macro
• Settings: f/4.0, ISO 800, 1/160s
• Lighting: Dual soft boxes for even coverage
• Style: Clean, professional, instructional

SCENE LAYOUT:
Professional nail training classroom
• Lead instructor demonstrating technique
• 3-4 students watching closely
• Practice hands on table
• ALOHA products lined up systematically

MACRO NAIL DETAILS:
• Close-up: Perfect polish application technique
• Brush angle, pressure, stroke direction visible
• ALOHA polish bottle (Lavender Violet) in focus
• Color comparison swatches on nail wheel
• Professional tools: files, buffers, cuticle pushers

EDUCATIONAL ELEMENTS:
• ALOHA color chart poster on wall
• Step-by-step application guide
• Certificate or diploma visible
• Professional notebook with notes

GREEK PROFESSIONAL TOUCH:
• Greek language materials
• ALOHA.GR branding prominent
• "Εκπαίδευση Επαγγελματιών" signage
• Quality certification badges

CALL TO ACTION:
"ΑΝΑΚΑΛΥΨΤΕ ΤΗΝ ALOHA ΔΙΑΦΟΡΑ"
"Προϊόντα για Επαγγελματίες - ALOHANAILS.GR"
"Δωρεάν Εκπαιδευτικό Υλικό με κάθε παραγγελία"

TARGET: Professional nail techs seeking quality
MOOD: Educational, trustworthy, expert-level`,
      specs: [
        "Training Environment",
        "Macro Technique Shots",
        "Educational Focus",
        "Professional Certification"
      ]
    },
    {
      id: 5,
      title: "Bridal Elegance Editorial",
      category: "bridal",
      prompt: `LUXURY BRIDAL EDITORIAL PHOTOGRAPHY
Greek wedding nail artistry for ALOHA Nails

CAMERA CONFIGURATION:
• Hasselblad X2D + 90mm f/2.5
• Settings: f/2.5, ISO 64, 1/200s
• Lighting: Natural window light + reflector
• Style: Romantic, soft, timeless elegance

BRIDAL SCENE:
Greek Orthodox church or luxury hotel suite
• Bride in lace gown, holding bouquet
• Traditional Greek wedding elements
• Pose: Showing wedding ring + nails
• Background: Soft romantic blur

BRIDAL NAIL PERFECTION:
• Polish: ALOHA Champagne Pearl + French tips
• Alternative: Soft pink with gold leaf accent
• Shape: Elegant oval, natural length
• Finish: Semi-matte with subtle shimmer
• Details: Wedding ring prominently featured

GREEK WEDDING TOUCHES:
• Orthodox wedding crowns (stefana) in background
• White roses, olive branches
• Gold jewelry, traditional aesthetics
• Soft romantic Mediterranean light

EMOTIONAL APPEAL:
"Η Πιο Σημαντική σας Μέρα Αξίζει ALOHA"
"Νυφικά Νύχια που Μένουν Τέλεια - ALOHANAILS.GR"
"Εμπιστοσύνη 10,000+ Νυφών σε όλη την Ελλάδα"

TARGET: Bridal nail specialists, salon owners
MOOD: Romantic, elegant, once-in-lifetime`,
      specs: [
        "Bridal Context",
        "Romantic Lighting",
        "Greek Wedding Elements",
        "Emotional Marketing"
      ]
    },
    {
      id: 6,
      title: "Bold Editorial - Red Carpet",
      category: "glamour",
      prompt: `HIGH-FASHION RED CARPET EDITORIAL
Celebrity glamour campaign for ALOHA Nails Greece

PROFESSIONAL SETUP:
• Phase One XF IQ4 + 80mm f/2.8
• Settings: f/2.8, ISO 100, 1/160s
• Lighting: Ring light + hair light + rim light
• Style: High-fashion, paparazzi-ready, bold

RED CARPET SCENARIO:
Athens Film Festival or luxury gala event
• Model: Confident Greek woman (30-40)
• Designer gown (black or deep burgundy)
• Pose: Hand on hip, commanding presence
• Background: Step & repeat with logos, flash photography

DRAMATIC NAIL STATEMENT:
• Polish: ALOHA Ruby Red (AF134 signature color)
• Shape: Dramatic stiletto, long length
• Finish: Ultra-high gloss, mirror-like shine
• Art: Subtle gold accent on ring finger
• Lighting: Multiple flash reflections on nails

CELEBRITY GLAMOUR DETAILS:
• Professional jewelry (statement rings)
• Perfect manicure, no imperfections
• Nails catching camera flashes
• Confident, powerful hand positioning

ASPIRATIONAL MESSAGING:
"ΚΟΚΚΙΝΟ ΧΑΛΙ ΕΤΟΙΜΟΤΗΤΑ - ΚΑΘΕ ΜΕΡΑ"
"Το Μυστικό των Celebrities - ALOHANAILS.GR"
"Επαγγελματική Ποιότητα, Διάσημη Λάμψη"

TARGET: High-end salons, celebrity nail techs
MOOD: Bold, confident, show-stopping`,
      specs: [
        "Red Carpet Setting",
        "High-Fashion Styling",
        "Bold Color Focus",
        "Celebrity Appeal"
      ]
    },
    {
      id: 7,
      title: "Minimalist Luxury - Mykonos",
      category: "lifestyle",
      prompt: `MINIMALIST LUXURY EDITORIAL
Mykonos summer campaign for ALOHA Nails

CAMERA DETAILS:
• Leica Q3 (fixed 28mm f/1.7)
• Settings: f/2.8, ISO 100, 1/320s
• Time: Morning light (8-9 AM)
• Style: Clean, minimal, modern luxury

MYKONOS AESTHETIC:
Whitewashed hotel terrace, infinity pool
• Model: Effortlessly chic Greek woman (25-30)
• White linen outfit, gold minimalist jewelry
• Pose: Relaxed, hand near face, natural
• Background: Blue Aegean Sea, white architecture

SUBTLE NAIL ELEGANCE:
• Polish: ALOHA Nude Perfection or Soft Lavender
• Shape: Natural square, short-medium length
• Finish: Natural gloss, healthy look
• Style: "No-makeup makeup" for nails
• Composition: Understated luxury

SUMMER LUXURY ELEMENTS:
• Iced coffee or fresh juice
• Designer sunglasses
• Minimal gold accessories
• Clean white and blue palette

LIFESTYLE MARKETING:
"Κομψότητα Χωρίς Προσπάθεια - ALOHA"
"Το Summer Look που Διαρκεί - ALOHANAILS.GR"
"Αγαπημένα των Κορυφαίων Salons στα Νησιά"

TARGET: Modern nail techs, boutique salons
MOOD: Effortless, minimalist, summer luxury`,
      specs: [
        "Mykonos Location",
        "Minimalist Aesthetic",
        "Natural Look",
        "Summer Campaign"
      ]
    },
    {
      id: 8,
      title: "Vintage Athenian Elegance",
      category: "heritage",
      prompt: `VINTAGE EDITORIAL PHOTOGRAPHY
1960s Athens revival campaign for ALOHA Nails

VINTAGE CAMERA STYLE:
• Modern digital mimicking film
• Canon EOS R6 + vintage lens adapter
• Settings: f/2.0, ISO 400, 1/125s
• Post: Film grain, faded colors, vintage look

RETRO ATHENS SCENE:
Historic Plaka neighborhood or vintage café
• Model: Classic Greek beauty (timeless age)
• 1960s-inspired outfit, silk scarf, cat-eye glasses
• Pose: Cigarette holder (unlit) or coffee cup
• Background: Old Athens architecture, vintage signage

CLASSIC NAIL STYLING:
• Polish: ALOHA Classic Red or Vintage Rose
• Shape: Rounded oval, medium length (60s style)
• Finish: High-gloss, classic elegance
• Details: Retro ring, vintage aesthetics

HERITAGE ELEMENTS:
• Black & white + selective color (nails in color)
• Vintage Greek typography
• Classic beauty standards
• Timeless elegance

NOSTALGIC MARKETING:
"Κλασική Ομορφιά, Σύγχρονη Ποιότητα"
"Από το 1960 στο 2025 - Διαχρονική Αριστεία"
"ALOHANAILS.GR - Η Παράδοση Συναντά την Καινοτομία"

TARGET: Established salons, mature professionals
MOOD: Nostalgic, timeless, heritage luxury`,
      specs: [
        "Vintage Aesthetic",
        "Film-Style Grading",
        "Heritage Branding",
        "Classic Athens"
      ]
    },
    {
      id: 9,
      title: "Nail Art Masterclass",
      category: "artistic",
      prompt: `ARTISTIC EDITORIAL PHOTOGRAPHY
Nail art showcase campaign for ALOHA Nails Greece

TECHNICAL PRECISION:
• Nikon Z8 + 105mm f/2.8 Macro VR
• Settings: f/5.6, ISO 400, 1/160s
• Lighting: Macro ring flash + side lighting
• Style: Clean product photography meets art

ARTISTIC WORKSPACE:
Professional nail art station
• Nail artist (Greek woman, 25-40) mid-creation
• Work-in-progress nail art designs
• ALOHA polishes arranged by color family
• Artistic tools: dotting tools, stripers, brushes

NAIL ART SHOWCASE:
• Multiple designs: geometric, floral, abstract
• Colors: ALOHA Lavender Violet, Ruby Red, Gold
• Techniques: ombré, marbling, hand-painted details
• Practice nails on display board
• Close-up: Brush creating intricate pattern

CREATIVE ELEMENTS:
• Color palette inspiration (Greek flag, sea, sunset)
• Artist sketches and designs
• Social media tablet showing nail art inspo
• Professional certification or awards

ARTISTIC MARKETING:
"Η Τέχνη σας Αξίζει ALOHA Ποιότητα"
"Χρώματα που Εμπνέουν Δημιουργικότητα"
"ALOHANAILS.GR - Εργαλεία για Καλλιτέχνες"

TARGET: Nail artists, creative professionals
MOOD: Artistic, creative, professional quality`,
      specs: [
        "Macro Art Details",
        "Creative Process",
        "Color Showcase",
        "Artistic Professional"
      ]
    },
    {
      id: 10,
      title: "Business Woman Power",
      category: "corporate",
      prompt: `CORPORATE EDITORIAL PHOTOGRAPHY
Professional businesswoman campaign for ALOHA Nails

PROFESSIONAL CAMERA SETUP:
• Sony A1 + 50mm f/1.2 GM
• Settings: f/2.0, ISO 320, 1/200s
• Lighting: Professional office lighting
• Style: Sharp, confident, corporate elegance

BUSINESS ENVIRONMENT:
Modern Athens office, glass building
• Model: Executive Greek woman (35-50)
• Tailored suit (navy or charcoal), silk blouse
• Pose: Signing document or tablet in hand
• Background: City skyline, professional office

PROFESSIONAL NAIL STANDARD:
• Polish: ALOHA Nude Professional or French Classic
• Shape: Short-medium square, practical elegance
• Finish: Natural gloss, office-appropriate
• Details: Subtle, sophisticated, not distracting

CORPORATE SUCCESS SYMBOLS:
• Designer watch, minimal jewelry
• Laptop, important documents
• Professional setting
• Confidence and capability

EMPOWERMENT MESSAGING:
"Επιτυχία στα Χέρια σας - ALOHA"
"Επαγγελματισμός που Φαίνεται στη Λεπτομέρεια"
"ALOHANAILS.GR - Η Επιλογή των Επιτυχημένων"

TARGET: Upscale salons, professional clientele
MOOD: Confident, successful, polished`,
      specs: [
        "Corporate Environment",
        "Professional Polish",
        "Success Imagery",
        "Executive Appeal"
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'Όλες οι Κατηγορίες', icon: '✨' },
    { id: 'hollywood', name: 'Hollywood Glamour', icon: '🎬' },
    { id: 'salon', name: 'Salon Professional', icon: '💅' },
    { id: 'lifestyle', name: 'Lifestyle', icon: '🌊' },
    { id: 'educational', name: 'Educational', icon: '📚' },
    { id: 'bridal', name: 'Bridal', icon: '💍' },
    { id: 'glamour', name: 'Red Carpet', icon: '⭐' },
    { id: 'heritage', name: 'Heritage', icon: '🏛️' },
    { id: 'artistic', name: 'Nail Art', icon: '🎨' },
    { id: 'corporate', name: 'Corporate', icon: '💼' },
  ];

  const filteredPrompts = selectedCategory === 'all'
    ? prompts
    : prompts.filter(p => p.category === selectedCategory);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 pt-8">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
            ALOHA NAILS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Luxury Editorial Campaign Generator
          </p>
          <p className="text-sm md:text-base text-gray-400">
            Ultra-realistic fashion photography prompts για επαγγελματίες nail technicians
          </p>
          <div className="mt-6 inline-block">
            <a
              href="https://www.alohanails.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-aloha-violet to-aloha-gold text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Visit ALOHANAILS.GR
            </a>
          </div>
        </header>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-aloha-violet to-aloha-gold text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Prompt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="prompt-box rounded-2xl p-6 card-hover"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {prompt.title}
                  </h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-aloha-violet/30 text-aloha-gold">
                    {categories.find(c => c.id === prompt.category)?.name}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {prompt.specs.map((spec, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <div className="bg-black/30 rounded-lg p-4 mb-4 max-h-64 overflow-y-auto">
                <pre className="text-xs text-gray-300 whitespace-pre-wrap font-mono">
                  {prompt.prompt}
                </pre>
              </div>

              <button
                onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  copiedId === prompt.id
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-aloha-violet to-aloha-gold text-white hover:opacity-90'
                }`}
              >
                {copiedId === prompt.id ? '✓ Αντιγράφηκε!' : 'Αντιγραφή Prompt'}
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-white/10">
          <p className="text-gray-400 mb-2">
            © 2025 ALOHA Nails - Premium Nail Products for Professionals
          </p>
          <p className="text-sm text-gray-500">
            Designed for Greek nail technicians, salons & beauty professionals
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://www.alohanails.gr" className="text-aloha-gold hover:underline">
              Shop Now
            </a>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">Target: Women 18-50, Nail Professionals</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
