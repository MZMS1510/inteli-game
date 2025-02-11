import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.cameras.main.setBackgroundColor(0x00ff00);

    this.player = this.add.sprite(640, 360, "player").setScale(5, 5);

    this.player.play("idle");

    // this.input.once("pointerdown", () => {
    //   this.scene.start("GameOver");
    // });
  }

  update(time, delta) {
    const speed = 500;
    const movement = speed * (delta / 1000);

    // Movimento vertical
    if (this.input.keyboard.addKey("W").isDown) {
      this.player.y -= movement;
    } else if (this.input.keyboard.addKey("S").isDown) {
      this.player.y += movement;
    }

    // Movimento horizontal
    if (this.input.keyboard.addKey("A").isDown) {
      this.player.x -= movement;
    } else if (this.input.keyboard.addKey("D").isDown) {
      this.player.x += movement;
    }

    // Faz a câmera seguir o jogador
    // this.cameras.main.centerOn(this.player.x, this.player.y);
  }
}
