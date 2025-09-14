import React from "react";

export default function Conclusions() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Conclusiones</h1>
      <p className="text-gray-700">
        Tras aplicar los modelos de calidad de software (McCall, Boehm y FURPS) 
        a Spotify en sus versiones Web y Móvil, se concluye lo siguiente:
      </p>

      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        <li>
          La versión <b>Spotify Móvil</b> alcanza una <b>completitud funcional cercana al 100%</b>,
          al soportar reproducción offline, integración avanzada y recomendaciones más precisas.
        </li>
        <li>
          La versión <b>Spotify Web</b>, aunque muy robusta, se ve limitada principalmente 
          por la ausencia de reproducción offline, lo que reduce su puntuación en completitud.
        </li>
        <li>
          Los tres modelos (McCall, Boehm, FURPS) coinciden en señalar que 
          <b>Mobile supera a Web en completitud de funciones</b>, 
          confirmando que la app móvil ofrece una experiencia más integral.
        </li>
        <li>
          Este análisis demuestra la utilidad de los modelos de calidad de software 
          para identificar áreas de mejora y comparar plataformas de un mismo servicio.
        </li>
      </ul>

      <p className="text-gray-600 italic">
        En resumen, Spotify Móvil cumple con todas las funciones esperadas y sobresale en
        completitud, mientras que Spotify Web requiere ajustes para ofrecer una experiencia 
        equiparable, sobre todo en la gestión offline.
      </p>
    </div>
  );
}
