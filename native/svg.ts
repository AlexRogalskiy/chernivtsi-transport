interface ToSVGParams {
  speed: number;
  angle: number;
  stroke?: string;
  fill?: string;
  text?: string;
  detailed?: boolean;
}

export function renderArrow(
  angle: ToSVGParams['angle'],
  stroke?: ToSVGParams['stroke']
): string {
  return `
    <path
      transform="rotate(${angle}, 13.663, 19)"
      d="M13.3385 8.19589e-07L17.3222 7.03125L9.35481 7.03125L13.3385 8.19589e-07Z"
      fill="${stroke}"
    />
  `;
}

export function renderInfo(
  text: ToSVGParams['text'],
  speed?: ToSVGParams['speed'],
  stroke?: ToSVGParams['stroke']
): string {
  return `
    <text
      fill="${stroke}"
      xml:space="preserve"
      font-size="13"
      font-weight="800"
    >
      <tspan x="35.2346" y="16.0432">${text}</tspan>
    </text>
    <text
      fill="${stroke}"
      xml:space="preserve"
      font-size="13"
    >
      <tspan x="35.2346" y="29.0432">${speed}км/год</tspan>
    </text>
  `;
}

// FIXME: Render trolleybus icon
export function renderIcon(
  stroke?: ToSVGParams['stroke'],
  fill?: ToSVGParams['fill']
): string {
  return `
    <ellipse
      cx="13.663"
      cy="19"
      rx="13"
      ry="13"
      fill="${fill}"
      stroke="${stroke}"
    />
    <path
      d="M19.0888 16.2313V23.8952H19.6554V16.2313H19.0888ZM16.5392 26.4231H10.8735V27H16.5392V26.4231ZM8.3239 23.8952V16.2313H7.75732V23.8952H8.3239ZM10.8735 26.4231C9.45894 26.4231 8.3239 25.2849 8.3239 23.8952H7.75732C7.75732 25.6164 9.15891 27 10.8735 27V26.4231ZM19.0888 23.8952C19.0888 25.2849 17.9537 26.4231 16.5392 26.4231V27C18.2538 27 19.6554 25.6164 19.6554 23.8952H19.0888ZM16.5392 13.7034C17.9537 13.7034 19.0888 14.8417 19.0888 16.2313H19.6554C19.6554 14.5101 18.2538 13.1265 16.5392 13.1265V13.7034ZM10.8735 13.1265C9.15891 13.1265 7.75732 14.5101 7.75732 16.2313H8.3239C8.3239 14.8417 9.45894 13.7034 10.8735 13.7034V13.1265ZM18.2389 16.2128V19.7585H18.8055V16.2128H18.2389ZM16.8225 21.1599H10.5902V21.7368H16.8225V21.1599ZM9.17376 19.7585V16.2128H8.60718V19.7585H9.17376ZM10.5902 14.8115H16.8225V14.2346H10.5902V14.8115ZM9.17376 16.2128C9.17376 15.4453 9.80147 14.8115 10.5902 14.8115V14.2346C9.50145 14.2346 8.60718 15.1138 8.60718 16.2128H9.17376ZM10.5902 21.1599C9.80147 21.1599 9.17376 20.526 9.17376 19.7585H8.60718C8.60718 20.8576 9.50145 21.7368 10.5902 21.7368V21.1599ZM18.2389 19.7585C18.2389 20.526 17.6112 21.1599 16.8225 21.1599V21.7368C17.9112 21.7368 18.8055 20.8576 18.8055 19.7585H18.2389ZM18.8055 16.2128C18.8055 15.1138 17.9112 14.2346 16.8225 14.2346V14.8115C17.6112 14.8115 18.2389 15.4453 18.2389 16.2128H18.8055ZM10.8735 24.0338C10.8735 24.3226 10.6307 24.5763 10.3069 24.5763V25.1533C10.9218 25.1533 11.44 24.6629 11.44 24.0338H10.8735ZM10.3069 24.5763C9.98307 24.5763 9.74033 24.3226 9.74033 24.0338H9.17376C9.17376 24.6629 9.69201 25.1533 10.3069 25.1533V24.5763ZM9.74033 24.0338C9.74033 23.745 9.98307 23.4912 10.3069 23.4912V22.9143C9.69201 22.9143 9.17376 23.4046 9.17376 24.0338H9.74033ZM10.3069 23.4912C10.6307 23.4912 10.8735 23.745 10.8735 24.0338H11.44C11.44 23.4046 10.9218 22.9143 10.3069 22.9143V23.4912ZM17.6724 24.0338C17.6724 24.3226 17.4296 24.5763 17.1058 24.5763V25.1533C17.7207 25.1533 18.2389 24.6629 18.2389 24.0338H17.6724ZM17.1058 24.5763C16.7819 24.5763 16.5392 24.3226 16.5392 24.0338H15.9726C15.9726 24.6629 16.4909 25.1533 17.1058 25.1533V24.5763ZM16.5392 24.0338C16.5392 23.745 16.7819 23.4912 17.1058 23.4912V22.9143C16.4909 22.9143 15.9726 23.4046 15.9726 24.0338H16.5392ZM17.1058 23.4912C17.4296 23.4912 17.6724 23.745 17.6724 24.0338H18.2389C18.2389 23.4046 17.7207 22.9143 17.1058 22.9143V23.4912ZM11.1516 13.4697C11.2472 12.9662 11.6954 12.5769 12.2425 12.5769V12C11.4283 12 10.7433 12.581 10.5953 13.3602L11.1516 13.4697ZM10.8735 13.7034H16.5392V13.1265H10.8735V13.7034ZM16.8173 13.3602C16.6693 12.581 15.9843 12 15.1702 12V12.5769C15.7173 12.5769 16.1654 12.9662 16.2611 13.4697L16.8173 13.3602ZM12.2425 12.5769H13.7063V12H12.2425V12.5769ZM13.7063 12.5769H15.1702V12H13.7063V12.5769ZM12.0066 23.8394H15.4061V23.2625H12.0066V23.8394ZM12.0066 24.9887H15.4061V24.4118H12.0066V24.9887Z"
      fill="${stroke}"
    />
  `;
}

export function toBase64(svg: string): string {
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

export function toRawSVG({
  angle,
  speed = 0,
  stroke = '#7D5C65',
  fill = 'white',
  text = 'Невідомий',
  detailed = true
}: ToSVGParams): string {
  const width = detailed ? 120 : 40;

  return `
    <svg
      width="${width}"
      height="40"
      viewBox="0 0 ${width - 10} 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      ${detailed ? renderInfo(text, speed, stroke) : ''}
      ${renderIcon(stroke, fill)}
      ${speed > 2 ? renderArrow(angle, stroke) : ''}
    </svg>
  `;
}

export function toSVG(args: ToSVGParams): string {
  return toBase64(toRawSVG(args));
}
