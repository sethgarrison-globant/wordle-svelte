<script>
</script>

<div class="game-container">
	<div class="title-container">
		<h1>Wordle</h1>
	</div>
	<div class="tile-container">
			<div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
			</div>
			<div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
			</div>
			<div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
			</div>
			<div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
			</div>
			<div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
			</div>
			<div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
				<div class="tile"></div>
			</div>
	</div>

	<div class="key-container">
			<button>Q</button>
			<button>W</button>
			<button>E</button>
			<button>R</button>
			<button>T</button>
			<button>Y</button>
			<button>U</button>
			<button>I</button>
			<button>O</button>
			<button>P</button>
			<button>A</button>
			<button>S</button>
			<button>D</button>
			<button>F</button>
			<button>G</button>
			<button>H</button>
			<button>J</button>
			<button>K</button>
			<button>L</button>
			<button>ENTER</button>
			<button>Z</button>
			<button>X</button>
			<button>C</button>
			<button>V</button>
			<button>B</button>
			<button>N</button>
			<button>M</button>
			<button>DELETE</button>
	</div>
</div>

<style>
	:global(*) {
		color: #ffffff;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
		'Lucida Sans', Arial, sans-serif;
	}

	:global(body) {
		background-color: #121213;
	}

	.game-container {
		height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.title-container {
		text-align: center;
		width: 510px;
		border-bottom: solid 1px #3a3a3c;
	}

	/*TILES*/
	.tile-container {
		width: 330px;
		margin-bottom: 30px;
	}

	.tile-container div {
		display: flex;
	}

	.tile-container .tile {
		width: 62px;
		height: 62px;
		border: 2px solid#3a3a3c;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 2px;
	}

	/*	KEYS*/
	.key-container {
		width: 510px;
		display: flex;
		flex-wrap: wrap;
	}

	.key-container button {
		width: 43px;
		height: 58px;
		border-radius: 4px;
		border: none;
		background-color: #818384;
		margin: 4px;
	}

	.key-container button:nth-child(11) {
		margin-left: 30px;
	}

	.key-container button:nth-child(20),
	.key-container button:nth-child(28) {
		width: 68px;
	}
</style>