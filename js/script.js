// Масштабирование меню для мобильных устройств
window.onload = function(){
	menu.style.height = window.innerHeight - 52 + "px";
}

window.onresize = function() {
	menu.style.height = window.innerHeight - 52 + "px";
	console.log(menu.style.height);
};

// Включение и выключение меню
open_menu.onclick = function(){
	menu.classList.toggle('off');
	body.classList.toggle('body-off');
}

// Объект создания пунктов
var list_obj = {

	1:{
		data: "Начало",
		text: "Начало",
		html: `
		<p>Добро пожаловать! Вы на станице с помощью которой вы сможете просмотреть свежую информацию и источники по разработке игры "Project SanAndreaZ"</p>
		<span>Официальная страница разработки
		<br>Написал: Антон Малежик</span>
		<h3>План разработки</h3>
		<p>Разработка делится на 7 этапов и каждый этап имеет свой под-этап. рассмотрим самые главные этапы:</p>
		<ul>
          <li>1. Концептирование</li>
          <li>2. Прототипирование</li>
          <li>3. Вертикальный срез</li>
          <li>4. Производство контента</li>
          <li>5. Закрытый бета-тест</li>
          <li>6. Открытый бета-тест</li>
          <li>7. Релиз</li>
		</ul>
		<h3>Расшифровка</h3>
		<p><b>Концептирование</b> - данный этап который находится на этой странице, представляет из себя описание всех геймплейных, графических и прочих функций перед разработкой</p>
		<p><b>Прототипирование</b> - этап при котором создается представление, базовые скрипты, сцены и прочие элементы для тестирования и проверки интересности геймплейных фишек или возможностей придуманных на этапе концептирования</p>
		<p><b>Вертикальный срез</b> - этап при котором обнаруживаются неудачные, ставшие ненужными или плохо продуманные или реализованные геймплейные, графические фишки, которые были реализованы на этапе прототипирования и производится полный вырез данного контента</p>
		<p><b>Производство контента</b> - этап при котором ведется полная и активная разработка игры, пишутся скрипты, совершенствуются базовые элементы, рисуется графика, создаются обложки и прочие элементы придуманные ещё в этапе концептирования</p>
		<p><b>Закрытый бета-тест</b> - этап при котором создается бета версия игры, экспортируется под различные устройства и проверяется через тестеров, знакомых или ограниченный круг лиц для тестирования и выявления ошибок, проблем у игры</p>
		<p><b>Открытый бета-тест</b> - этап при котором создается открытая бета версия игры, экспортируется под различные устройства и проверяется через обширный круг людей, которые представляет из себя интересы в участии тестировании игрового продукта и выявления ошибок, проблем у игры</p>
		<p><b>Релиз</b> - этап при котором экспортируется весь проект, под все задуманные устройства, в дело подключается маркетинг, выпуск и распространение игрового продукта. Полная поддержка проекта и наблюдение за его стабильностью</p>
		`,
	},

	2:{
		data: "Лого",
		text: "Логотипы и баннеры",
		html: `
		<p>Список логотипов для узнаваемости бренда</p>
		<img src="images/sz.png">
		<img src="images/projectsz.png">
		<img src="images/lordgamellc.png">
		`,
	},

	3:{
		data: "Команда",
		text: "Наша команда",
		html: `
		<p>Список команды, обязанности или должности каждого члена команды</p>
		<div class="com">
			<section><img src="images/team1.jpg"></section>
			<section>
				<h4>Андрей Зензеров</h4>
				<span>Ссылка: https://vk.com/sanandreaz1996</span>
				<p>Ведущий разработчик, геймдизайнер, сценарист, основатель</p>
				<span>Создание сценария, геймдизайн игры, основание проекта, лидер, заполнение базы данных, оптимизация игрового баланса, менеджер проекта, руководитель</span>
			</section>
		</div>
		<div class="com">
			<section><img src="images/team2.jpg"></section>
			<section>
				<h4>Максим Неудахин</h4>
				<span>Ссылка: https://vk.com/neudakhin88005353535</span>
				<p>Геймдизайнер, Художник по моделям, Графический дизайнер</p>
				<span>Геймдизайн, графический дизайн, создание графики, помощь руководителю, оформление базы данных, подсказки, диздоки</span>
			</section>
		</div>
		<div class="com">
			<section><img src="images/team3.jpg"></section>
			<section>
				<h4>Антон Малежик</h4>
				<span>Ссылка: Ссылка: https://vk.com/lordgamellc</span>
				<p>Ведущий,веб разработчик, UI,графический дизайнер, программист</p>
				<span>Разработка скриптов, дизайн, UI, обложек, мультиплеер, сервер, лаунчер, автообновления, публикация игры (Не маркетинг)</span>
			</section>
		</div>
		<div class="com">
			<section><img src="images/team4.jpg"></section>
			<section>
				<h4>Егор Фролов</h4>
				<span>Ссылка: Ссылка: https://vk.com/bromie</span>
				<p>Помощник ведущего разработчика, Мап дизайнер, дизайнер компонентов карт, рограммист</p>
				<span>Создание и разработка прототипов карт для проведения на них боев, разработка компонентов карт и помощь ведущему разработчику</span>
			</section>
		</div>
		`,
	},

	4:{
		data: "Очкиарены",
		text: "Очки арены",
		html: `
		<p><b>Очки лиги</b> - они показывают реальный опыт игрока в игре, сколько игр он провел за получением данного уровня лиги. Уровень лиги предназначен для установки в мультиплеере такой функции как поиск по рангам. Слабых игроков не бросит к сильным, а сильных не бросит к слабым</p>
		<h3>Условия очков лиги</h3>
		<p>В случае победы в бою, игроку будут начисляться по 12 очков арены, что будет плюсовать очки для общего уровня лиги. А в случае поражения игрока, будет отниматься по 6 очков арены. При том при уменьшении уровня лиги у игрока, по причине плохой игры, то очки арены не снимаются и остаются у игрока. Ежегодно очки арены сбрасываются в нулевое значение у всех игроков в игре</p>
		<h3>Кратко про условия</h3>
		<ul>
    		<li>При победе очки арены прибавляются на 12 очков</li>
    		<li>При поражении очки арены уменьшаются на 6 очков, при условии что очки арены не ровны нулю</li>
    		<li>При понижении уровня лиги, очки арены остаются</li>
    		<li>Каждый год, у всех игроков будут сбрасываться очки арены</li>
		</ul>
		`,
	},

	5:{
		data: "Лиги",
		text: "Лиги",
		html: `
		<p><b>Лига</b> - это уникальное, присвоенное за заслуги игроку звание для повышения максимального уровня игры и получения доступа играть с более сложными игроками и самим таковым являться</p>
		<h3>Условия повышения лиги</h3>
		<p>Лига будет повышать свой уровень в зависимости от радиуса минимального и максимального значения нужных очков арены для имения данной лиги. Их описание и получение описаны ниже</p>
		<h3>Кратко про условия</h3>
		<table>
			<tr>
				<td>Лига</td>
				<td>От</td>
				<td>До</td>
				<td>очков арены</td>
			</tr>
			<tr>
				<td>Вне лиги</td>
				<td>0</td>
				<td>1.000</td>
				<td>очков арены</td>
			</tr>
			<tr>
				<td>Мусорная лига</td>
				<td>1.001</td>
				<td>2.500</td>
				<td>очков арены</td>
			</tr>
			<tr>
				<td>Железная лига</td>
				<td>2.501</td>
				<td>4.000</td>
				<td>очков арены</td>
			</tr>
			<tr>
				<td>Медная лига</td>
				<td>4.001</td>
				<td>6.000</td>
				<td>очков арены</td>
			</tr>
			<tr>
				<td>Бронзовая лига</td>
				<td>6.001</td>
				<td>8.000</td>
				<td>очков арены</td>
			</tr>
			<tr>
				<td>Серебрянная лига</td>
				<td>8.001</td>
				<td>10.000</td>
				<td>очков арены</td>
			</tr>
			<tr>
				<td>Золотая лига</td>
				<td>10.001</td>
				<td>12.000</td>
				<td>очков арены</td>
			</tr>
			<tr>
				<td>Платиновая лига</td>
				<td>12.001</td>
				<td>13.500</td>
				<td>очков арены</td>
			</tr>
			<tr>
				<td>Кристаллическая лига</td>
				<td>13.501</td>
				<td>16.000</td>
				<td>очков арены</td>
			</tr>
			<tr>
				<td>Титановая лига</td>
				<td>16.001</td>
				<td>18.000</td>
				<td>очков арены</td>
			</tr>
			<tr>
				<td>Чемпионская лига</td>
				<td>18.001</td>
				<td>20.000</td>
				<td>очков арены</td>
			</tr>
			<tr>
				<td>Божественная лига</td>
				<td>20.001</td>
				<td>25.000</td>
				<td>очков арены</td>
			</tr>
		</table>
		`,
	},

	6:{
		data: "Базаданных",
		text: "База данных",
		html: `
		<p>Для использования и заполнения в базу данных элементов и объектов используется программное обеспечение под названием Runa версии 5.1</p>
		<a href="files/runabase51.zip" download>Скачать базу данных</a>
		<span>Предпросмотр возможной базы данной</span>
		<img src="images/runa51.jpg">
		`,
	},

	7:{
		data: "Setupкомпилятор",
		text: "Setup компилятор",
		html: `
		<p>Для компиляции игры в установочник формата setup.exe, используется программа Inno setup maker</p>
		<a href="files/sim.zip" download>Скачать setup компилятор</a>
		<span>Предпросмотр возможной программы компиляции</span>
		<img src="images/innosetup.jpg">
		`,
	},

	8:{
		data: "Лаунчерсобновлениями",
		text: "Лаунчер с обновлениями",
		html: `
		<p>Для обновления файлов игры до последней версии будет использоваться собственно-ручно написанная система получения и сравнивание последних измененных файлов на сервере с файлами самой игры и проверяться, стоит ли игроку обновить игру или у него последняя версия</p>
		`,
	},

	9:{
		data: "Начало",
		text: "Начало",
		html: `
		<p>Добро пожаловать!</p>
		`,
	},

	10:{
		data: "Получениеданныхобигрокахсервером",
		text: "Получение данных об игроках сервером",
		html: `
		<p>Для получения данных об игроках сервером, используется система объектов в программировании. Сам сервер будет представлен в виде объекта который сможет хранить в себе данные об всех сессиях</p>
		<h3>Например:</h3>
		<code>
			<pre>
global_player = {
  	"nickname"     : "Player_52182",
  	"ip"           : "192.000.00.80",
  	"arena_points" : 0,
  	"rank"         : "Мусорная лига",
	
  	"health"       : 100,
  	"weapon"       : "AGOG M4A1_s1",
  	"ammo"         : "30",
}</pre>
		</code>
		<span>И так далее...</span>
		<p>На данном примере мы видим объект global_player, что означает что это глобальная информация об пользователи. Почему она должна быть глобальной? Самая главная причина этому в том, что данные об сессии пользователя мы будем брать как в игре, так и в игровом меню, мультиплеере и на сервере</p>
		<p>Причем мы так же видим что объект global_player который определяет нашего игрока в сессии имеет несколько значений внутри себя: nickname, ip, rank и т.д. Это значит что наш пользователь хранит в себе информацию, в том числе и имя пользователя, ip и прочие нужные данные. Наши данные об сервере будут храниться в объекте как указано здесь, но уже иметь в себе описание информации всех пользователей в сессии вплоть до часов игры на сервере и т.д.</p>
		<img src="images/databasealgoritm.png">
		<h3>Данные о сервере</h3>
		<p>Данные об сервере тоже будут представлены в видео одного объекта, например объекта server_info_players - что будет расшифровываться как "сервер > информация > игроки"</p>
		<h3>Пример хранения информации сервером:</h3>
		<code>
			<pre>
server_info_players = {
  
  player_32141 : {
    "nickname"     : "Player_32141",
    "ip"           : "192.000.00.80",
    "arena_points" : 1000,
    "rank"         : "Мусорная лига",
  },
  
  player_35341 : {
    "nickname"     : "Player_35341",
    "ip"           : "192.000.00.80",
    "arena_points" : 50,
    "rank"         : "Мусорная лига",
  },

  player_94321 : {
    "nickname"     : "Player_94321",
    "ip"           : "192.000.00.80",
    "arena_points" : 0,
    "rank"         : "Мусорная лига",
  },

}</pre>
		</code>
		`,
	},

	11:{
		data: "Игровоеменюинастройки",
		text: "Игровое меню и настройки",
		html: `
		<p>На данной странице будет показаны скриншоты для игрового меню и настроек</p>
		<h3>Главное меню</h3>
		<img src="images/gamemenu.jpg">
		<h3>Настройки: Основные</h3>
		<img src="images/gmsindex.jpg">
		<h3>Настройки: Графика</h3>
		<img src="images/gmsgraphic.jpg">
		<h3>Настройки: Управление</h3>
		<img src="images/gmscontrols.jpg">
		<h3>Настройки: Локализация</h3>
		<img src="images/gmsloc.png">
		<h3>Арсенал</h3>
		<img src="images/gmarsenal.jpg">
		<h3>Магазин</h3>
		<img src="images/gmstore.jpg">
		<h3>Магазин: попап меню (единственный показ)</h3>
		<img src="images/gmstorepopup.jpg">
		<h3>Конвентатор валют</h3>
		<img src="images/gmconvert.jpg">
		<h3>Прокачка</h3>
		<img src="images/gmskills.jpg">
		<h3>Донат</h3>
		<img src="images/gmdonat.jpg">
		<span>И так далие..</span>
		`,
	},

	12:{
		data: "Анимации",
		text: "Анимации",
		html: `
		<p>Для создание анимации для проекта, используется программа Spriter. Она легка и универсальна в использовании и ускоряет труд в любой разработки</p>
		<h3>Создание анимации</h3>
		<p>Для создания анимации ничего толком не нужно, все есть из коробки прям здесь! Переносим картинки на рабочую область, создаем кости и цепляем картинки к костям и начинаем анимировать задавая время</p>
		<a href="files/spriter pro.zip">Скачать программу для анимации</a>
		<span>Предпросмотр Spriter PRO</span>
		<img src="images/spriter.jpg">
		`,
	},

	13:{
		data: "Валюты",
		text: "Валюты",
		html: `
		<h3>Рубли</h3>
		<p>1я распространённая валюта, на этой валюте приобретаются любые боеприпасы (любого типа) и различные виды советского (русского) оружия (только русское оружие). (можно производить апгрейды русского оружия и купить разные скины за рубли)</p>
		<h3>Доллары</h3>
		<p>2я распространённая валюта, на этой валюте приобретаются всё остальное оружие - кроме редкого оружия, мировые модели оружия. (можно производить апгрейды мирового оружия и также можно купить разные скины за доллары)</p>
		<h3>Евро</h3>
		<p>3я распространённая валюта, на этой валюте приобретаются разные усиления (в т.ч. и боевые), перки, редкие виды оружия и техники</p>
		<h3>Золото</h3>
		<p>1й вид редкой валюты, используемой для конвертации, ускорении времени и эволюции оружия</p>
		<h3>Рубины</h3>
		<p>2й вид редкой валюты, используемой для конвертации, покупки и улучшению навыков персонажа. (может использоваться для прокачки необычного оружия)</p>
		<h3>Алмазы</h3>
		<p>3й вид редкой валюты (очень редкой), используемой для конвертации, покупки и прокачки экспериментального вооружения, экипировки</p>
		<h3>Условия</h3>
		<ul>
    		<li>За рубли можно купить только русское оружие</li>	
   			<li>За доллары можно купить все оружие, кроме русского и редкого оружия</li>	
    		<li>За евро покупаются усиления, перки и редкое оружие</li>	
   			<li>За золото можно конвертировать валюты, ускорять время и совершать эволюцию оружия</li>	
    		<li>за рубины можно прокачать необычное оружие</li>	
    		<li>за алмазы можно прокачать экспериментальное оружие</li>	
		</ul>
		`,
	},

	14:{
		data: "Конвертацияисоотношениевалют",
		text: "Конвертация и соотношение валют",
		html: `
		<p>Курсы валют и их конвертации</p>
		<ul>
			<li>80₽ > 1€</li>
			<li>75₽ > 1$</li>
		</ul>
		<ul>
			<li>1$ > 60₽</li>
			<li>1€ > 65₽</li>
		</ul>
		<ul>
			<li>1€ > 2$</li>	
			<li>4$ > 1€</li>
		</ul>
		`,
	},

	15:{
		data: "Оружиеиеготипы",
		text: "Оружие и его типы",
		html: `
		<p>Вся доступная информация об оружии</p>
		<h3>Введение</h3>
		<p>У каждого огнестрельного оружия в игре есть свои характеристики, параметры и уникальный Индификатор. Заполняется это всё через базу данных и сохраняется в файлы .csv</p>
		<h3>Каждое оружие имеет:</h3>
		<ul>
    		<li>ID (Индификатор, уникальная цифра)</li>
    		<li>Название оружия</li>
    		<li>Тип оружия (Описаны ниже)</li>
    		<li>Урон (Сколько пуля будет наносить урона врагам)</li>
    		<li>Точность (Измеряется в процентах от 0% до 100%)</li>
    		<li>Темп стрельбы (Сколько пуль может вылетить за 1 секунду)</li>
    		<li>Дальность полета пули (Указание в метрах, 1600 - оптимально)</li>
    		<li>Скорость перезарядки (В секундах, обычно 1,5s)</li>
    		<li>Емкость магазина (Сколько патрон поместится в один магазин)</li>
    		<li>Боезапас с собой (Сколько патрон можно унести с собой для данного оружия, обычно это емкость магазина * 5)</li>
		</ul>
		<h3>Типы оружия</h3>
		<ul>
			<li>Пистолет</li>
			<li>Пистолет-пулемет</li>
			<li>Дробовик</li>
			<li>Винтовка</li>
			<li>Автомат</li>
			<li>Пулемет</li>
			<li>Гранатомет</li>
			<li>Граната</li>
			<li>Необычное</li>
			<li>Экспирементальное</li>
		</ul>
		<h3>Представление в виде объекта</h3>
		<code>
			<pre>
weapon = {

  "Ak74-M" : {
      "id"       : 1,         # Индификатор
      "name"     : "Ak74-M",  # Название
      "type"     : "pistol",  # Тип оружия
      "damage"   : 45,        # Урон пули
      "sniper"   : 60%,       # Точность (0% - 100%)
      "temp"     : 3,         # Пуль в секунду
      "long"     : 1600,      # Дальность пули
      "reload"   : 1.5,       # Скорость перезарядки
      "magazine" : 30,        # Магазин в оружии
      "ammo"     : 150,       # Боезапас с собой
  },
  
}</pre>
		</code>
		`,
	},

	16:{
		data: "ИнтерфейсиHUD",
		text: "Интерфейс и HUD",
		html: `
		<p>Страница посвещенная интерфейсу игрока и его показателям</p>
		<h3>Прототип интерфейса</h3>
		<img src="images/hudtest.jpg">
		<h3>Состоит из:</h3>
		<ul>
			<li>Аватара, в нем знак и звание</li>
			<li>Имени героя</li>
			<li>Здоровья, брони</li>
			<li>Шкала опыта</li>
			<li>Из миникарты, в которой показаны кол-во гранат, мин, аптечек</li>
			<li>Из блока показа иконки и названия оружия, в ней же боезапас и текущее колво в магазине</li>
			<li>Из нижней полоски выбора оружия</li>
		</ul>
		`,
	},

	17:{
		data: "Снаряжениеиусиления",
		text: "Снаряжение и усиления",
		html: `
		<p>Немного информации об снаряжении и усилениях для игрока</p>
		<h3>Лист снаряжения</h3>
		<ul>	
    		<li>Бронежилет: 100 евро (+50 брони)</li>
    		<li>Бронежилет + каска: 200 евро (+100 брони)</li>
    		<li>Боевой экзокостюм: 350 евро (+200 брони)</li>
    		<li>Суперброня: 500 евро (+300 брони)</li>
    		<li>Экспериментальная броня: 1000 евро (+500 брони)</li>
    		<li>Медшприц: 10 евро (восстанавливает 10% здоровья)</li>
    		<li>Малый медпакет: 25 евро (восстанавливает 25% здоровья)</li>
    		<li>Средняя аптечка: 50 евро (восстанавливает 50% здоровья)</li>
    		<li>Большой медбокс: 100 евро (полностью восстанавливает здоровье)</li>
    		<li>Энергетик: 20 евро (ускорение на 25% на 5 минут, используется 1 раз за бой)</li>
    		<li>Боевой стимулятор: 50 евро (ускорение на 50% на 4 минуты, используется 1 раз за бой)</li>
    		<li>Адреналин: 100 евро (ускорение на 100% на 3 минуты, восстановление 5% здоровья, используется 1 раз)</li>
    		<li>Авиаудар: 500 евро (урон 100-250, рандомно падающие ракеты, действует 10 секунд)</li>
		</ul>
		`,
	},

	18:{
		data: "Наградызаубийство",
		text: "Награды за убийство",
		html: `
		<p>Немного информации об наградах за убийство игроков</p>
		<h3>Награды</h3>	
		<ul>
    		<li>1 - 29 лвл: 10 рублей, 0-1 доллар и 0-1 евро</li>
    		<li>30 - 69 лвл: 20 рублей, 1-5 доллар и 1-5 евро</li>
    		<li>70 - 100 лвл: 30 рублей, 1-10 доллар и 1-10 евро</li>
    		<li>101-130 лвл: 40 рублей, 1-15 доллар, 1-15 евро, 0-1 золото</li>
    		<li>131-170 лвл: 40 рублей, 1-15 доллар, 1-15 евро, 0-1 золото, 0-1 рубин</li>
    		<li>171-200 лвл: 40 рублей, 1-15 доллар, 1-15 евро, 0-1 золото, 0-1 рубин, 0-1 алмаз</li>
		</ul>
		`,
	},

	// 19:{
	// 	data: "Начало",
	// 	text: "Начало",
	// 	html: `
	// 	<p>Добро пожаловать!</p>
	// 	`,
	// },

}

// Лимит
var list_lim = Object.keys(list_obj).length + 1;

// Генерация списка пунктов
for (let num = 1; num < list_lim; num++) {
	list.innerHTML += `<p data-f="${list_obj[num].data}" class="link">${list_obj[num].text}</p>`;
	list_page.innerHTML += `<section class="block ${list_obj[num].data}"><h1>${list_obj[num].text}</h1>${list_obj[num].html}</section>`;
};
