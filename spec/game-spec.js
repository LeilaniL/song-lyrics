

import { Game } from '../src/game';
import { Card } from '../src/card';

describe('Game', function() {
let newGame;
let newCard;
  beforeEach(function() {
    newGame = new Game("Jerry Rosenblatt");
    newCard = new Card("test", "testing is fun");
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('will lose a point when lower score called ', function() {
    newGame.score = 9;
    newGame.lowerScore();
    expect(newGame.score).toEqual(8);
  });

  it('will gain a point when raise score called', function() {
    newGame.score = 8;
    newGame.raiseScore();
    expect(newGame.score).toEqual(9);
  });

  it("should return true when user answer correct", function() {
    const userAnswer = "test";
    expect(newCard.testAnswer(userAnswer)).toEqual(true);
  })

  it("should return false when user answer wrong", function() {
    const userAnswer = "false test";
    expect(newCard.testAnswer(userAnswer)).toEqual(false);
  })



});