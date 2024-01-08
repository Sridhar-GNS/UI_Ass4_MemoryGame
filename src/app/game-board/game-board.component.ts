// game-board.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  gridSize: number = 6; // or 12 for different grid size
  cards: Array<string | number> = [];
  flippedCards: number[] = [];
  matchedCards: number[] = [];
  moves: number = 0;
  misses: number = 0;
  roundsPlayed: number = 0;

  restartGame(): void {
    this.cards = [];
    this.flippedCards = [];
    this.matchedCards = [];
    this.initializeCards();
    this.roundsPlayed++;
  }

  onGridSizeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.gridSize = parseInt(target.value, 10);
  }
  ngOnInit(): void {
    this.initializeCards();
  }

  initializeCards(): void {
    const totalCards = this.gridSize / 2;
    for (let i = 1; i <= totalCards; i++) {
      const cardPath = `assets/images/card${i}.jpg`; // Change the extension as needed
      this.cards.push(cardPath, cardPath);
    }
    this.shuffleCards(this.cards);
    
  }
  
  cardClicked(index: number): void {
    if (
      !this.flippedCards.includes(index) &&
      this.flippedCards.length < 2 &&
      !this.matchedCards.includes(index)
    ) {
      this.flippedCards.push(index);
      if (this.flippedCards.length === 2) {
        this.moves++;
        setTimeout(() => this.checkMatch(), 1000);
      }

    }
    
  }

  checkMatch(): void {
    const [firstCard, secondCard] = this.flippedCards;
    if (this.cards[firstCard] === this.cards[secondCard]) {
    
      this.matchedCards.push(firstCard, secondCard);
      
    }
    else{this.misses++}
    this.flippedCards = [];

  }


  
  shuffleCards(cards: any[]): void {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
      
    }
  }

  
  


 
}

