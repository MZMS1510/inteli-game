export class Player {
  static instance;

  /**
   * @param {Phaser.Scene} scene The scene you're spawning the player on
   * @returns Returns the player instance
   */
  constructor(scene) {
    if (this.instance) {
      this.instance.scene = scene;
      return this.instance;
    }

    this.scene = scene;
    this.instance = this;
  }

  preload() {
    this.scene.load.spritesheet("player", "player.png", {
      frameWidth: 48,
      frameHeight: 48,
    });
  }

  spawn(x, y) {
    // this.sprite = this.scene.physics.add.sprite(x, y, "player").setScale(5, 5);
    this.sprite = this.scene.physics.add.sprite(x, y, "player");
    this.sprite.setCollideWorldBounds(true);
    this.sprite.body.setSize(15, 15, true);
    this.create();
  }

  create() {
    // Define a velocidade que o jogador se move e sua animação padrão
    this.speed = 6;
    this.sprite.play("idle");

    // ================================================================
    // Funcionalidades da câmera

    // Define o zoom padrão da câmera
    this.scene.cameras.main.setZoom(5, 5);
    // Faz a câmera seguir o jogador
    this.scene.cameras.main.startFollow(this.sprite, true, 0.1, 0.1);
  }

  update(time, delta) {
    // ================================================================
    // Funcionalidades de movimento
    // Cálculo de movimento
    let direction = new Phaser.Math.Vector2();

    // Direção vertical
    if (this.scene.input.keyboard.addKey("W").isDown) {
      direction.y = -1;
    } else if (this.scene.input.keyboard.addKey("S").isDown) {
      direction.y = 1;
    } else {
      direction.y = 0;
    }

    // Direção horizontal
    if (this.scene.input.keyboard.addKey("A").isDown) {
      direction.x = -1;
    } else if (this.scene.input.keyboard.addKey("D").isDown) {
      direction.x = 1;
    } else {
      direction.x = 0;
    }

    let velocity = new Phaser.Math.Vector2();

    // Normaliza o Vetor para não ter movimento diagonal mais rápido que o normal
    direction.normalize();

    velocity.x = direction.x * this.speed * delta;
    velocity.y = direction.y * this.speed * delta;

    this.sprite.body.setVelocity(velocity.x, velocity.y);
  }

  destroy() {
    this.sprite.destroy();
  }
}
