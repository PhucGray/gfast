import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    height: 30px;
    padding-inline: 40px;

    display: flex;
    align-items: center;

    background: #212121;

    button {
        height: 100%;
        padding-inline: 20px;

        position: relative;

        div {
            position: absolute;
            top: -4px;
            right: -4px;

            display: flex;
            height: 12px;
            width: 12px;

            .span_1 {
                position: absolute;
                height: 100%;
                width: 100%;

                border-radius: 50%;

                background: #3b82f6;
                opacity: 0.75;

                animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

                @keyframes ping {
                    75%,
                    100% {
                        transform: scale(3);
                        opacity: 0;
                    }
                }
            }

            .span_2 {
                position: relative;
                display: inline-flex;

                height: 12px;
                width: 12px;
                border-radius: 50%;

                background: #2563eb;
            }
        }
    }
`;
