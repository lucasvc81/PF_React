-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 07-08-2024 a las 19:48:35
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `adketing`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Trump trashes far-left VP pick Tim Walz, says Dem ticket will turn America ‘communist immediately’', 'Former President Donald Trump warned Wednesday that Vice President Kamala Harris and her VP pick, Tim Walz, will take the United States straight into communism if they win the 2024 election.\r\n', '“There’s never been a ticket like this,” Trump, 78, said during an appearance on Fox News’ “Fox & Friends” after Harris chose the Minnesota governor as her running mate.\r\n“This is a ticket that would want this country to go communist immediately, if not sooner.”\r\n\r\nThe Republican presidential candidate trashed his Democratic rivals just hours after Elon Musk, too, slammed Harris — calling her “quite literally a communist” in a post on X.\r\n\r\nElsewhere in the interview, Trump took aim at Walz — a darling of the far left – and insisted he was “thrilled” the Democrats had picked a progressive candidate to complete their presidential ticket.'),
(3, 'Zombie Bands Attack! These Touring Groups Don’t Have a Single Original Member', 'From Lynyrd Skynyrd to the Four Tops, our rundown of bands that continue to tour without a single classic-era member', 'As Trey Anastasio told us recently, keeping a rock band together is an extraordinarily difficult task. “Picture who your best friends were when you were 18,” he said. “And imagine you got trapped in a van with them for 40 years…. It just builds up, and personalities clash. I’m talking real loathing, like, ‘Don’t put a gun in the room.’ It’s really crazy.”\r\n\r\nAnastasio’s band Phish is one of the few acts in rock history to keep their classic lineup together decade after decade. Most groups have at least one major absence due to some combination of retirement, illness, death, personality conflicts, or prolonged legal battles. Even the once unbreakable U2 recently wrapped up their Las Vegas run at Sphere with a replacement drummer because Larry Mullen Jr. has been sidelined with a back injury. They still have 3/4 of their lineup standing strong. The Rolling Stones are at 3/5 (or 2/5 if Ronnie Wood is still the new guy to you), Journey are at 2/5, the Who at 2/4, the Eagles at 3/5 (or 1/5 if we’re just counting OGs), and so on and so on.'),
(5, 'Primer Titulo agregado', 'Primer Subtitulo agregado', 'Este es mi primera novedad agregada a la pagina'),
(6, 'PRUEBA 2', 'SUB PRUEBA 2', 'CUERPO PRUEBA2'),
(7, 'MODIFICACION - HOLA', 'HOLA', 'HOLA'),
(8, 'Titulo de Prueba', 'Sub de pruebaaa', 'Cuerpo de Prueba');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'lucas', 'e10adc3949ba59abbe56e057f20f883e'),
(2, 'naty', 'e10adc3949ba59abbe56e057f20f883e');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
