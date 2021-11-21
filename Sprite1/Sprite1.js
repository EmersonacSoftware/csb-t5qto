/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Sprite1/costumes/costume2.png", {
        x: 69,
        y: 42
      }),
      new Costume("costume3", "./Sprite1/costumes/costume3.png", {
        x: 69,
        y: 42
      }),
      new Costume("costume4", "./Sprite1/costumes/costume4.png", {
        x: 33,
        y: 17
      }),
      new Costume("costume5", "./Sprite1/costumes/costume5.png", {
        x: 35,
        y: 22
      }),
      new Costume("costume6", "./Sprite1/costumes/costume6.png", {
        x: 35,
        y: 22
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "w" }, this.whenKeyWPressed)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(this.mouse.x, this.mouse.y);
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.stamp();
  }

  *whenGreenFlagClicked2() {
    this.direction = 90;
    this.clearPen();
  }

  *whenKeySpacePressed() {
    this.costumeNumber += 1;
  }

  *whenKeyWPressed() {
    this.direction += 22.5;
  }
}
