import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  reviews: { review: string, deviceType: string } [] = [
    { review: "This app has changed the way I eat. It creates a personalized plan just for you!", deviceType: "app-store" },
    { review: "This app simplified my nutrition journey. It asked the right questions and provided tailored recommendations. I've never felt better!", deviceType: "google-play" },
    { review: "The best calorie counting app straight forward and easy to use!", deviceType: "app-store" },
    { review: "This macro calculation app is a lifesaver! It asked me all the right questions about my goals and dietary preferences, and then, like magic, it gave me personalized calorie, fat, protein, and carb recommendations.", deviceType: "google-play" },
    { review: "The app is like a personal nutritionist on my phone. It's user-friendly, precise, and has helped me hit my daily nutrition targets.", deviceType: "app-store" },
    { review: "This macro calculation app is a game-changer for anyone who wants to take control of their diet. It doesn't just give you numbers; it understands your preferences and lifestyle.", deviceType: "google-play" },

    { review: "This macro calculation app is a game-changer for anyone who wants to take control of their diet. It doesn't just give you numbers; it understands your preferences and lifestyle.", deviceType: "google-play" },
    { review: "This macro calculation app is a game-changer for anyone who wants to take control of their diet. It doesn't just give you numbers; it understands your preferences and lifestyle.", deviceType: "app-store" },
    { review: "This macro calculation app is a game-changer for anyone who wants to take control of their diet. It doesn't just give you numbers; it understands your preferences and lifestyle.", deviceType: "app-store" },
  ];
}
