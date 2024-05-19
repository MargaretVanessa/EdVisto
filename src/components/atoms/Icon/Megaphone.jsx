import PropTypes from "prop-types";

const Megaphone = ({ color, width }) => {
    return (
        <svg
            width={width}
            height={width}
            viewBox="0 0 42 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_532_7140)">
                <path
                    d="M1.9342 25.8445C3.06436 26.89 4.51521 27.4556 6.36983 27.5736C7.34577 27.6354 8.33808 27.6269 9.29868 27.6194C9.72478 27.6161 10.1509 27.6132 10.577 27.6151C10.7173 27.6161 10.8574 27.6151 10.9876 27.6151H11.0313L11.0369 27.6278C11.0468 27.65 11.0553 27.6662 11.0583 27.6657C11.0235 28.473 10.9883 29.2804 10.9527 30.0881C10.8849 31.6264 10.8147 33.217 10.7547 34.782C10.7444 35.2922 10.7669 35.8027 10.8222 36.3101C10.8431 36.5365 10.9277 36.7525 11.0663 36.933C11.2049 37.1135 11.3918 37.2515 11.6055 37.3309C12.694 37.7931 13.8678 38.0218 15.0508 38.002C15.4794 38.0009 15.9077 37.9782 16.3339 37.9337C17.0882 37.8567 17.2644 37.5045 17.3397 36.839C17.629 34.1968 17.6322 31.5313 17.3494 28.8886C17.3132 28.5411 17.2872 28.1927 17.2569 27.7901C17.2494 27.6883 17.2414 27.5831 17.233 27.4744C17.4447 27.5903 17.6494 27.7025 17.8476 27.8111C18.4295 28.1294 18.979 28.43 19.5131 28.7359C20.8678 29.5112 22.2328 30.3226 23.553 31.107C26.3588 32.7751 29.2603 34.4984 32.2376 35.985C32.4312 36.0814 32.6229 36.1827 32.8141 36.2837C33.7929 36.8009 34.8046 37.3347 36.073 37.2407C36.9618 37.1738 37.3495 37.0388 37.3232 36.026C37.3154 35.7278 37.2993 35.4258 37.2838 35.1341C37.2591 34.6694 37.2338 34.1891 37.2418 33.7203C37.2941 30.7317 37.3678 27.8114 37.4335 25.3496C37.4447 24.9326 37.4827 24.5097 37.5194 24.1003C37.5322 23.9583 37.5449 23.817 37.5566 23.6763C38.6383 23.5404 39.6451 23.0534 40.4215 22.2902C41.1978 21.5271 41.7006 20.5304 41.8524 19.4538C42.0473 18.0693 41.8963 16.9864 41.3773 16.0481C40.5206 14.4971 38.9867 13.8499 37.5886 13.38V13.2365C37.5886 13.049 37.5902 12.869 37.5874 12.6886C37.5717 11.676 37.555 10.6632 37.5374 9.6503C37.4964 7.23086 37.4541 4.72905 37.4339 2.26879C37.4285 1.61805 37.1664 1.29573 36.9475 1.13934C36.6186 0.90494 36.1401 0.866869 35.6345 1.03507C35.4391 1.10719 35.2518 1.19937 35.0758 1.31013C35.015 1.34575 34.9538 1.38139 34.8926 1.41441C34.7157 1.51119 34.5401 1.6104 34.3644 1.70979C34.0542 1.88511 33.7335 2.06635 33.4122 2.22899C32.4697 2.70497 31.5248 3.1767 30.5778 3.64423C28.6752 4.5888 26.708 5.56536 24.8018 6.58204C22.5561 7.78011 20.2142 9.13631 17.8415 10.6133C17.7449 10.6732 17.6498 10.7349 17.556 10.7943C16.804 11.2765 16.1546 11.6935 15.2494 11.3705C15.1356 11.3378 15.0161 11.3293 14.8988 11.3456C14.874 11.3476 14.8493 11.3495 14.8249 11.3505C14.4241 11.3691 14.0232 11.3832 13.6214 11.3971C12.696 11.4296 11.7392 11.4631 10.8006 11.5535C8.70003 11.7564 7.12671 12.0826 5.69871 12.6106C3.59226 13.3896 2.22769 14.4546 1.40443 15.9623C0.430663 17.6873 -0.00279954 19.6635 0.159916 21.6364C0.274414 22.9364 0.578353 24.5892 1.9342 25.8445ZM15.0386 27.1843V35.9452H13.2087L12.9647 27.5764L15.0386 27.1843ZM3.55895 16.3984C4.20865 15.3599 5.28428 14.596 6.66837 14.1892C7.8261 13.8385 9.00869 13.5752 10.2061 13.4017C11.4335 13.2341 12.6535 13.1312 13.945 13.0223C14.4342 12.9811 14.9281 12.9394 15.4289 12.8935L15.2514 24.8765L15.0907 24.8996C14.8623 24.938 14.6319 24.9621 14.4005 24.9724C13.5605 24.9911 12.709 25.0478 11.8854 25.1029C10.0841 25.2222 8.22149 25.346 6.39423 25.0775L6.35415 25.0718C5.99462 25.0196 5.6222 24.9646 5.26947 24.8784C3.7803 24.5159 2.89603 23.6271 2.56561 22.1602C2.33349 21.1827 2.3019 20.1684 2.47272 19.1782C2.64354 18.1881 3.01325 17.2426 3.55967 16.3984H3.55895ZM17.7936 12.8557C19.8308 11.4253 33.0464 4.79004 35.4719 3.96468C35.6085 10.9097 35.5068 17.976 35.4097 24.8122C35.364 27.9908 35.3171 31.2747 35.294 34.5273C33.0683 33.365 30.8739 32.1266 28.7493 30.9271C25.1922 28.9193 21.5152 26.8438 17.7141 25.1479C17.9316 20.3636 17.9569 16.4513 17.7943 12.8557H17.7936ZM37.6191 21.1265V15.3246C38.899 15.7024 39.731 16.972 39.6653 18.4927C39.6095 19.8001 38.7618 20.8742 37.6198 21.1262L37.6191 21.1265Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_532_7140">
                    <rect
                        width="42"
                        height="37.1847"
                        fill="white"
                        transform="translate(0 0.928589)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

Megaphone.propTypes = {
    color: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
};

export default Megaphone;
