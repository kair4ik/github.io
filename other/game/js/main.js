var game;

game = new Phaser.Game(900,700,Phaser.AUTO, 'gameDiv',
	{
		create: create
	});

function create() {
	game.add.text(100, 100, " Это просто Phaser.Ахуенн о ! ",
		{
			font: '48px Arial',
			fill: '#ffffff',
		});
}
