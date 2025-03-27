const affirmations = [
  "Healing is a journey, and I trust the process.",
  "The universe is always working in my favor.",
  "I wake up excited for the day ahead.",
  "I give myself permission to take up space.",
  "I am worthy of a love that feels easy and safe.",
  "I choose to believe in myself every single day.",
  "My energy is magnetic, and I bring positivity wherever I go.",
  "I attract relationships that nourish and support me.",
  "I forgive myself and others with ease.",
  "I am worthy of love, success, and happiness.",
  "I am at peace with where I am while working toward where I want to be.",
  "My dreams are possible, and I am creating them daily.",
  "I am loved, valued, and appreciated.",
  "I honor my emotions and allow myself to feel.",
  "I am proud of who I am and who I am becoming.",
  "I trust that what is meant for me will never miss me.",
  "I embrace each day with love and gratitude.",
  "I trust myself to make the best decisions for my life.",
  "I embrace change as a pathway to growth.",
  "I attract success and abundance effortlessly.",
  "Gratitude fills my heart and attracts even more abundance.",
  "I am open to receiving miracles.",
  "My potential is limitless.",
  "I set healthy boundaries with love and confidence.",
  "I am constantly evolving into my best self.",
  "I radiate confidence and self-belief.",
  "I choose relationships that align with my highest self.",
  "I am enough exactly as I am.",
  "I am a magnet for opportunities and blessings.",
  "I choose happiness in every moment.",
  "The life of my dreams is unfolding before me.",
  "I am the creator of my own reality, and I choose joy.",
  "My heart is open to deep, meaningful connections.",
  "My voice matters, and I speak with confidence.",
  "My past does not define me; I create my future.",
  "I let go of self-doubt and embrace my power.",
  "I welcome financial abundance with gratitude.",
  "I am surrounded by beauty and joy.",
  "I give and receive love freely and unconditionally.",
  "I create a life that makes me feel truly alive.",
  "Love flows to me effortlessly in all forms.",
  "I align my energy with the life I want to live.",
  "My happiness comes from within, and I nurture it daily.",
  "I choose peace over worry and love over fear.",
  "I release relationships that no longer serve my highest good.",
  "I deserve love, and I receive it in abundance.",
  "I celebrate every small and big win in my life.",
  "Everything I desire is already on its way to me.",
  "I let go of what no longer serves me and make space for joy.",
  "Every challenge I face makes me stronger.",
  "I release limiting beliefs and step into my power."
];

function getDailyAffirmation() {
  const today = new Date().toISOString().split("T")[0];
  const hash = today.split("-").join("") % affirmations.length;
  return affirmations[hash];
}

// Create the widget container
const widget = document.createElement("div");
widget.id = "affirmation-widget"; // Assign an ID for styling
widget.innerText = getDailyAffirmation();

document.body.appendChild(widget);
