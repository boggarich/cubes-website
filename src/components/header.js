import React from "react";

import "../assets/sass/header.scss";
import $ from 'jquery';

const handleShow = () => {

    let navigationDrawer = $(".navigation-drawer");

    navigationDrawer.addClass("show");

    setTimeout(function() {

        let navigationDrawerContent = navigationDrawer.find('li');

        navigationDrawerContent.each(function(index, element) {

            setTimeout(() => {

                $(this).addClass('animated-slide-up');

            }, 100 * index);

        });

    }, 300);

}

function Header () {
    return(

        <header>
            <div className="layout-width">

                <nav className="d-flex justify-content-between">

                    <div className="d-flex align-items-center">
                        <svg width="54" height="54" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.334 0.463904C44.3767 1.5775 54.088 3.5605 62.5039 4.9855C69.0367 6.0919 65.0932 8.7493 61.7203 11.7499C61.1395 12.2665 60.5911 12.5416 60.0031 13.0786C55.8853 16.8385 51.8959 20.4475 47.7583 24.1792L47.6839 24.2464L47.6071 24.3154L47.5276 24.3868L47.446 24.4594L47.3626 24.5341L47.2768 24.6103L47.1892 24.6883L47.0998 24.7675L47.0083 24.8485L46.915 24.9304L46.8199 25.0138L46.7239 25.0984H46.7233L46.6258 25.1842L46.5265 25.2709L46.4254 25.3588L46.3237 25.4473L46.2205 25.5367H46.2202L46.1158 25.627V25.6273L45.9031 25.8094L45.7954 25.9012L45.6865 25.9939L45.5773 26.0869L45.4669 26.1802L45.3559 26.2735V26.2738L45.2446 26.3674H45.2443L45.1324 26.4607L44.9071 26.6479H44.9068L44.7937 26.7415H44.7934L44.4523 27.0202L44.2249 27.2041L44.1109 27.2947L43.9975 27.3853H43.9972L43.8841 27.475H43.8838L43.6582 27.6517L43.546 27.7387L43.4347 27.8245H43.4344L43.3237 27.9088L43.2136 27.9928H43.213L43.1038 28.0747C42.9583 28.1836 42.8149 28.2886 42.6745 28.3894L42.466 28.5373H42.4657L42.3637 28.6081H42.3634L42.2626 28.6777L42.1633 28.7449H42.163C42.0973 28.7893 42.0322 28.8322 41.9686 28.8736H41.9683L41.8735 28.9348H41.8732L41.7799 28.9936C41.7181 29.032 41.6578 29.0689 41.5987 29.1043L41.5111 29.1559H41.5108L41.4253 29.2051L41.3416 29.2513H41.3413L41.26 29.2951H41.2594L41.1418 29.3563L41.0221 29.4163H41.0218L40.9 29.4763H40.8997L40.7761 29.5351H40.7758L40.6501 29.5933H40.6498L40.5226 29.65L40.3933 29.7064H40.393L40.2619 29.7619L40.129 29.8162H40.1287L39.994 29.8696L39.8578 29.9221H39.8575L39.7198 29.9737H39.7195L39.5797 30.0244L39.4387 30.0739L39.2959 30.1225L39.1519 30.1702L39.0064 30.2167L38.8597 30.2617L38.7118 30.3058H38.7115L38.5621 30.3487L38.4115 30.3904L38.2597 30.4309L38.1067 30.4702L37.9528 30.508L37.7977 30.5443L37.6417 30.5797L37.4845 30.6139L37.3267 30.6466L37.1683 30.6778L37.0087 30.7075H37.0084L36.8479 30.736L36.6868 30.7627L36.5251 30.7882L36.3628 30.8122L36.1996 30.8347L36.0358 30.8554L35.8717 30.8749L35.7073 30.8926L35.542 30.9085L35.3767 30.9232L35.2111 30.9358L35.0449 30.9469L34.8787 30.9559L34.7122 30.9631L34.5454 30.9691L34.3792 30.973L34.2124 30.9751L34.0453 30.9757L33.8785 30.9739L33.7117 30.9706L33.5449 30.9649L33.3787 30.9577L33.2122 30.9487L33.046 30.9376L32.8804 30.9244L32.7148 30.9094L32.5498 30.8923L32.3854 30.8731L32.2207 30.8515L32.0569 30.8278L31.894 30.8023L31.7314 30.7741L31.5694 30.7441L31.408 30.712C28.5994 30.1282 24.9358 28.8343 22.0447 27.9688C17.6389 26.65 6.79329 23.6896 3.36009 22.4158C1.21389 21.6196 2.22369 20.0692 3.29619 19.1827L3.44679 19.0588L3.59799 18.9355L3.74979 18.8128L3.90189 18.6907L4.0549 18.5689L4.2082 18.4477L4.3621 18.3271L4.5163 18.2074L4.67079 18.0874L4.82649 17.9683L4.98189 17.8498L5.13789 17.7316L5.2945 17.6137L5.4514 17.4964L5.60859 17.3794L5.7664 17.2627L5.9242 17.1469L6.08259 17.0308L6.241 16.9153L6.39999 16.8004L6.55929 16.6855L6.71889 16.5709L6.8782 16.4566L7.0381 16.3426L7.19829 16.2289L7.3588 16.1155L7.51929 16.0024L7.68009 15.8893L7.8409 15.7765L8.002 15.6643L8.1631 15.5518L8.3242 15.4396L8.4856 15.3274L8.6473 15.2155L8.8087 15.1039L8.9704 14.9923L9.1318 14.8804L9.29319 14.7691L9.45489 14.6575L9.61629 14.5462L9.77799 14.4349L9.93939 14.3236V14.3233L10.1011 14.2123L10.2625 14.101V14.1007L10.4239 13.9897V13.9894L10.585 13.8781L10.7461 13.7668L10.9072 13.6552L11.0677 13.5436L11.2285 13.432V13.4317L11.389 13.3201L11.5495 13.2079L11.7097 13.096V13.0957L11.8696 12.9838L12.0295 12.8713L12.1885 12.7588V12.7585L12.3478 12.6463V12.646L12.5068 12.5332L12.6655 12.4204V12.4201L12.8236 12.307V12.3067L12.9817 12.1933L13.1392 12.0796L13.2967 11.9653V11.965L13.4533 11.8507V11.8504L27.0544 2.2864L27.169 2.2219L27.2857 2.158L27.4039 2.0953L27.5239 2.0335L27.6451 1.97201L27.7684 1.9114L27.8926 1.8517L28.0189 1.7929L28.1464 1.7347L28.2754 1.67771L28.4056 1.6216L28.5373 1.5664L28.6702 1.5124L28.8046 1.459L28.9402 1.4071L29.077 1.3561L29.2147 1.3057L29.3539 1.2565L29.4946 1.2088L29.6356 1.16201V1.1614L29.7778 1.1158V1.1155L29.9212 1.0711V1.0708L30.0652 1.0276L30.2104 0.985004L30.3565 0.943604L30.5032 0.903704L30.6508 0.865004L30.7996 0.827504L30.9484 0.791204L31.0981 0.756104L31.2487 0.722204L31.3996 0.690104V0.689803L31.5511 0.658904L31.7035 0.629505V0.629205L31.8562 0.601305L32.0095 0.574304L32.1631 0.548805L32.317 0.524803L32.4715 0.502303L32.626 0.481305L32.7811 0.461504L32.9362 0.443505L33.0919 0.427005V0.426705L33.2473 0.412005V0.411705L33.403 0.398204L33.5587 0.386504L33.7147 0.376305V0.376005L33.8704 0.367303L34.0261 0.360404L34.1818 0.355004L34.3378 0.351404L34.4932 0.349304H34.6489L34.804 0.350504V0.350804L34.9588 0.353805L35.1136 0.358604L35.2681 0.365504L35.422 0.374205L35.5753 0.384704L35.7283 0.397005L35.881 0.410804L36.0331 0.427005L36.1846 0.445004L36.3358 0.464803L36.334 0.463904ZM3.5056 24.7948L27.2767 31.8697C31.3357 33.0883 32.6248 33.4063 35.1937 35.8915C37.0819 37.7179 38.5879 39.8059 39.4093 43.3708L45.8014 70.9897C45.8188 71.0698 45.835 71.1475 45.8491 71.2231C45.8632 71.299 45.8752 71.3728 45.8857 71.4442C45.8962 71.5159 45.9046 71.5858 45.9115 71.653C45.9184 71.7208 45.9235 71.7859 45.9271 71.8495C45.9307 71.9128 45.9325 71.9746 45.9325 72.0343C45.9325 72.0937 45.9307 72.1513 45.928 72.2074C45.9247 72.2632 45.9202 72.3169 45.9139 72.3691C45.9073 72.421 45.9001 72.4714 45.8905 72.5197C45.8815 72.568 45.8704 72.6148 45.8584 72.6598C45.8458 72.7048 45.8323 72.7477 45.8173 72.7891C45.8023 72.8305 45.7858 72.8704 45.7678 72.9085C45.7501 72.9466 45.7306 72.9829 45.7099 73.0177C45.6892 73.0525 45.6676 73.0858 45.6445 73.117C45.6214 73.1488 45.5971 73.1788 45.5713 73.207C45.5458 73.2355 45.5185 73.2622 45.4906 73.288C45.4627 73.3135 45.4333 73.3372 45.4033 73.3597C45.3727 73.3825 45.3415 73.4035 45.3088 73.4233C45.2761 73.4431 45.2428 73.4614 45.208 73.4782C45.1735 73.4953 45.1381 73.5109 45.1012 73.5253C45.0646 73.5394 45.0268 73.5523 44.9884 73.5643C44.95 73.576 44.9104 73.5865 44.8702 73.5961C44.8297 73.6051 44.7886 73.6132 44.7463 73.6201C44.7043 73.6267 44.6617 73.6327 44.6179 73.6369C44.5738 73.6417 44.5294 73.6453 44.4841 73.6474C44.4388 73.6495 44.3929 73.651 44.3464 73.6513C44.2996 73.6513 44.2519 73.6507 44.2042 73.6492C44.1565 73.6474 44.1076 73.6444 44.0581 73.6411C44.0092 73.6372 43.9591 73.6324 43.9087 73.627C43.8583 73.6216 43.8076 73.6153 43.756 73.6075C43.7044 73.6003 43.6525 73.5919 43.6 73.5832C43.5478 73.5742 43.4947 73.5643 43.4416 73.5538C43.3882 73.5433 43.3345 73.5319 43.2805 73.5199C43.2265 73.5076 43.1716 73.495 43.117 73.4815L42.9517 73.4389C42.8962 73.4242 42.8404 73.4086 42.7846 73.3927C42.7285 73.3765 42.6724 73.36 42.616 73.3429L42.4471 73.2901L42.2767 73.234L42.106 73.1752L41.9353 73.114L41.7646 73.0507L41.5942 72.9856L41.4241 72.9184L41.2552 72.85L41.0875 72.7807L40.9213 72.7105V72.7099L40.7569 72.6391L40.5946 72.568L40.4344 72.4969L40.2775 72.4258L40.123 72.3553L39.9718 72.2857V72.2854L39.8239 72.217V72.2167L39.6799 72.1495L39.5401 72.0841V72.0838L39.4042 72.0196L39.2734 71.9578L39.1474 71.8984V71.8981L39.0265 71.8414L38.911 71.7874L38.8015 71.7367L38.698 71.6896L38.6008 71.6461V71.6458L38.5096 71.6065L21.5146 64.1965C20.1076 63.586 18.6367 62.9923 17.257 62.3482C14.8615 61.2298 12.4495 58.9675 11.1238 56.7082C11.1058 56.6776 11.0857 56.641 11.0638 56.5987C11.0422 56.5567 11.0188 56.5084 10.993 56.4553C10.9675 56.4019 10.9396 56.3431 10.9108 56.2789L10.8181 56.0704L10.7155 55.8313L10.6027 55.5625L10.4812 55.2649L10.3501 54.9403L10.2112 54.5893L10.0633 54.2125L9.90819 53.8126L9.745 53.3887L9.57549 52.9435L9.39879 52.4773L9.21609 51.9913L9.02739 51.487L8.83329 50.965L8.63379 50.4265L8.4298 49.8727L8.22159 49.3051L8.0092 48.724L7.79349 48.1312V48.1309L7.5742 47.5273L7.3525 46.9141V46.9138L7.1281 46.2919L6.90189 45.6625L6.67359 45.0265V45.0262L6.44439 44.3851V44.3848L6.21429 43.7395L5.9839 43.0909V43.0906L5.7535 42.4399L5.5228 41.7886L5.29359 41.137L5.0653 40.4872L4.83789 39.8395L4.6129 39.196V39.1957L4.38969 38.5564V38.5561L4.16979 37.9225L3.95229 37.2958L3.7384 36.6769L3.5284 36.0673L3.32229 35.4679L3.1207 34.8799L2.9242 34.3039L2.7331 33.7417V33.7414L2.5471 33.1942V33.1936L2.3677 32.6617L2.1949 32.1466L2.02899 31.6495V31.6492L1.87 31.1713V31.171L1.7188 30.7132V30.7129L1.576 30.2761L1.441 29.8615L1.3153 29.4706V29.4703L1.19859 29.104L1.09149 28.7635L0.994295 28.4491L0.907595 28.1629L0.831395 27.9058L0.766296 27.679L0.712895 27.4831C0.697295 27.4231 0.683495 27.3688 0.671495 27.3196C0.659495 27.2707 0.649595 27.2269 0.642095 27.1894C0.634595 27.1519 0.629196 27.1198 0.625596 27.0937L0.612095 26.9824L0.600395 26.8738L0.590795 26.7679L0.582994 26.6644L0.577294 26.5639L0.573694 26.4661L0.571594 26.371V26.2786L0.573694 26.1883L0.577595 26.101L0.583595 26.0164L0.591395 25.9342L0.601296 25.8547L0.612994 25.7776L0.626495 25.7029L0.641795 25.6312L0.659496 25.5619L0.678694 25.4944L0.699695 25.4299L0.722795 25.3678L0.747696 25.3084L0.774395 25.2511L0.802895 25.1962L0.833495 25.1437L0.865896 25.0933L0.900095 25.0459L0.935795 25.0003L0.973595 24.9571L1.0132 24.9166L1.0546 24.8779L1.0981 24.8416L1.1431 24.8071L1.1899 24.7753L1.2385 24.7456L1.2889 24.718L1.3414 24.6925L1.39539 24.6694V24.6691L1.45149 24.6484L1.50909 24.6295L1.5685 24.6127L1.62939 24.598L1.6921 24.5854L1.75689 24.5749L1.8232 24.5665V24.5662L1.8913 24.5596L1.96119 24.5554L2.03259 24.5527L2.10579 24.5521L2.18079 24.5536V24.5539L2.25759 24.5569L2.3356 24.562L2.4157 24.5689L2.49729 24.5779V24.5782L2.581 24.589L2.6659 24.6019L2.75229 24.6163L2.84109 24.6328L2.93109 24.6508L3.02289 24.6706V24.6709L3.11619 24.6922V24.6925L3.211 24.7159V24.7162L3.30759 24.7411V24.7414L3.406 24.7681V24.7684L3.5056 24.7969V24.7948ZM46.7341 28.1425L54.2653 21.2458L54.286 21.2269L54.2899 21.223L54.2908 21.2221L54.2962 21.2176L54.3013 21.2125L54.3064 21.208L54.3118 21.2032L54.3151 21.2002L54.3169 21.1984L54.322 21.1933L54.3274 21.1888L54.3325 21.184L54.3379 21.1792L54.3406 21.1768L54.343 21.1747L54.3484 21.1699L54.3538 21.1651L54.3589 21.1603L54.3643 21.1555L54.3661 21.1534L54.3748 21.1459L54.3799 21.1411L54.3853 21.1363L54.3907 21.1315L54.3922 21.1303L54.3961 21.1267L54.4015 21.1219L54.4066 21.1171L54.412 21.1123L54.4171 21.1075L54.4177 21.1069L54.4222 21.1024L54.4276 21.0976L54.433 21.0928L54.4384 21.0877L54.4438 21.0829V21.0823L54.4489 21.0775L54.4543 21.0727L54.4597 21.0676L54.4651 21.0628L54.4696 21.0586L54.4702 21.058L54.4756 21.0529L54.4813 21.0481L54.4867 21.0433L54.4918 21.0382L54.4957 21.0349L54.4972 21.0331L54.5026 21.028L54.508 21.0232L54.5134 21.0181L54.5191 21.013L54.5221 21.0106L54.5248 21.0082L54.5299 21.0034L54.5353 20.9986L54.541 20.9935L54.5464 20.9884L54.5488 20.9863L54.5518 20.9833L54.5575 20.9785L54.5629 20.9734L54.5686 20.9686L54.5743 20.9635L54.5758 20.962L54.5797 20.9584L54.5854 20.9533L54.5908 20.9485L54.5962 20.9434L54.6019 20.9383L54.6028 20.9377L54.6073 20.9332L54.6127 20.9281L54.6184 20.923L54.6238 20.9176L54.6295 20.9125L62.5213 13.8877C64.7425 11.842 67.9666 7.93 69.448 10.2532C70.5073 11.9152 71.8864 27.3709 72.2695 30.5278C73.4278 40.0696 75.2146 44.8762 68.9956 51.7807L59.0989 63.0889L59.0734 63.1177L59.0482 63.1462L59.0233 63.1747L58.9987 63.2026L58.9744 63.2302L58.9501 63.2575L58.9267 63.2845L58.9033 63.3112L58.8805 63.3379L58.8577 63.3643L58.8349 63.3904L58.813 63.4165H58.8127L58.7908 63.442L58.7689 63.4672L58.7473 63.4927L58.726 63.5176L58.705 63.5428L58.684 63.5674L58.6633 63.592L58.6426 63.6166H58.6423L58.6219 63.6409H58.6216L58.6015 63.6652L58.5811 63.6895H58.5808L58.5607 63.7135L58.5406 63.7375H58.5403L58.5205 63.7615L58.5004 63.7855L58.4806 63.8095H58.4803L58.4605 63.8335H58.4599L58.4404 63.8575L58.4206 63.8812H58.4203L58.4005 63.9049L58.3804 63.9292H58.3801L58.3603 63.9532L58.3405 63.9772L58.3201 64.0012L58.3 64.0255H58.2997L58.2796 64.0495L58.2592 64.0738H58.2589L58.2385 64.0981L58.2178 64.1224L58.1968 64.1473L58.1758 64.1722L58.1548 64.1971H58.1545L58.1335 64.2223H58.1332L58.1122 64.2481H58.1116L58.09 64.2733H58.0897L58.0681 64.2991L58.0459 64.3252L58.0234 64.3513L58.0006 64.378H58.0003L57.9775 64.405L57.9541 64.4317L57.9304 64.4593L57.9064 64.4866L57.8824 64.5145L57.8578 64.543H57.8575L57.8326 64.5712L57.8074 64.6003L57.7816 64.6291L57.7555 64.6585H57.7552L57.7288 64.6885L57.7018 64.7188L57.6745 64.7494L57.6508 64.7761L57.6271 64.8022H57.6265L57.6034 64.8283L57.5797 64.8541L57.5563 64.8802L57.5329 64.906L57.5098 64.9315L57.487 64.9576H57.4864L57.4636 64.9828H57.4633L57.4405 65.0083H57.4402L57.4174 65.0332L57.3943 65.0584L57.3718 65.0836H57.3712L57.3484 65.1085H57.3481L57.3256 65.1334L57.3028 65.1583L57.2803 65.1829L57.2575 65.2078L57.235 65.2327L57.2122 65.2573L57.1897 65.2822L57.1675 65.3065L57.145 65.3311L57.1228 65.356L57.1003 65.3803L57.0781 65.4049L57.0559 65.4292L57.0334 65.4541L57.0112 65.4787L56.989 65.503L56.9668 65.5276L56.9449 65.5522L56.9227 65.5771L56.9005 65.6017L56.8783 65.6263L56.8564 65.6509L56.8342 65.6758L56.812 65.7004L56.7898 65.7256L56.7676 65.7505L56.7454 65.7754L56.7232 65.8006L56.701 65.8261L56.6788 65.8516L56.6566 65.8771L56.6347 65.9026L56.6122 65.9284L56.59 65.9539L56.5675 65.98L56.5453 66.0058L56.5228 66.0322L56.5006 66.0583L56.4781 66.0847L56.4559 66.1114L56.4337 66.1381H56.4334L56.4112 66.1651H56.4109L56.3884 66.1924L56.3659 66.2194L56.3431 66.2473L56.3206 66.2749H56.32L56.2975 66.3028L56.275 66.3307H56.2747L56.2519 66.3589L56.2291 66.3874H56.2285L56.1709 66.4594L56.1097 66.535L56.0458 66.6142H56.0452L55.9783 66.6967H55.978L55.9081 66.7825H55.9078L55.8352 66.871L55.7596 66.9628L55.6816 67.0576L55.6012 67.1545H55.6009L55.5181 67.2538L55.4329 67.3561L55.3456 67.4605H55.3453L55.2559 67.5667L55.1641 67.6747L55.0708 67.7848L54.9754 67.8964L54.8791 68.0092L54.7804 68.1241H54.7801L54.6802 68.2399L54.5791 68.3572H54.5785L54.4762 68.4748L54.3721 68.5933L54.2671 68.713H54.2668L54.1609 68.8333L54.0538 68.9533L53.9458 69.0739L53.8372 69.1948L53.7277 69.3154L53.6182 69.436H53.6176L53.5075 69.556L53.3968 69.6757L53.2858 69.7951L53.1748 69.9133L53.0638 70.0306L52.9528 70.1473L52.8415 70.2628L52.7305 70.3771L52.6201 70.4899L52.51 70.6009L52.4005 70.7104L52.291 70.8181L52.1827 70.9237L52.0756 71.0275L51.9688 71.1286L51.8632 71.2273L51.7588 71.3233L51.6553 71.4175L51.5533 71.5078L51.4525 71.5954L51.3532 71.6803L51.2554 71.7616L51.1597 71.8399L51.0652 71.9143L50.9728 71.9854L50.8822 72.0523L50.794 72.1156L50.7079 72.1744L50.6242 72.2293L50.5423 72.2797L50.4634 72.3259L50.3866 72.367L50.3128 72.4036C50.2885 72.4147 50.2645 72.4255 50.2414 72.4351C50.218 72.445 50.1952 72.4534 50.1727 72.4615L50.0908 72.4891C50.0638 72.4978 50.0371 72.5056 50.0104 72.5125L49.9324 72.532C49.9063 72.538 49.8811 72.5428 49.8559 72.5473C49.8307 72.5518 49.8058 72.5557 49.7815 72.5587C49.7572 72.562 49.7332 72.5647 49.7089 72.5665C49.6849 72.5686 49.6615 72.5698 49.6381 72.5707C49.6147 72.5713 49.5919 72.5716 49.5694 72.5713C49.5466 72.5707 49.5238 72.5698 49.5022 72.5683C49.48 72.5665 49.4584 72.5644 49.4368 72.5617V72.5614L49.3732 72.5518L49.3111 72.5389L49.2508 72.5227V72.5221C49.231 72.5164 49.2112 72.5098 49.1923 72.5029C49.1728 72.496 49.1536 72.4885 49.135 72.4807L49.0795 72.4549L49.0258 72.4267L48.9733 72.3955V72.3952L48.9223 72.3619V72.3616C48.9055 72.3499 48.8887 72.3379 48.8725 72.3253L48.8242 72.2866C48.8086 72.2734 48.793 72.2599 48.7774 72.2455L48.7321 72.202L48.6883 72.1561L48.6454 72.1081L48.604 72.058L48.5638 72.0058L48.5251 71.9521V71.9518L48.4876 71.8963V71.896L48.4513 71.8387L48.4156 71.7796V71.7793L48.3814 71.7187V71.7184L48.3481 71.6566V71.6563L48.3163 71.593V71.5927L48.2851 71.5279L48.2551 71.4616L48.226 71.3941L48.1978 71.3257V71.3254L48.1705 71.2564L48.1441 71.1856L48.1186 71.1148L48.094 71.0428V71.0425L48.07 70.9702L48.0469 70.8973L48.0241 70.8235L48.0025 70.7497L47.9815 70.6753L47.9611 70.6009L47.9416 70.5265V70.5262L47.9227 70.4521L47.9038 70.3771L47.8858 70.3027L47.8681 70.2283L47.8513 70.1545L47.8345 70.0807L47.8186 70.0075L47.8027 69.9352L47.7871 69.8632L47.7721 69.7918L47.7571 69.7216L47.7427 69.652L47.7283 69.583L47.7145 69.5158L47.7004 69.4492L47.6692 69.301L47.6377 69.1534L47.6062 69.0055L47.5747 68.8576L47.5426 68.71V68.7097L47.5111 68.5621L47.479 68.4145V68.4139L47.4466 68.266L47.4145 68.1181L47.3818 67.9705V67.9699L47.3494 67.8223L47.3164 67.6744L47.2837 67.5262L47.2177 67.2304L47.1844 67.0825V67.0822L47.1511 66.9343L47.1178 66.7861L47.0845 66.6379L47.0506 66.49L47.0173 66.3418L46.9834 66.1942V66.1939L46.8817 65.7499L46.8475 65.602L46.8133 65.4538L46.7791 65.3059L46.7107 65.0098L46.6762 64.8619L46.642 64.714V64.7137L46.6075 64.5658L46.5727 64.4179H46.5724L46.5379 64.27V64.2694L46.5034 64.1218L46.4689 63.9739L46.4338 63.826H46.4335L46.3987 63.6781L46.3639 63.5305L46.3291 63.3826L46.2946 63.235V63.2347L46.2595 63.0871L46.2247 62.9392L46.1896 62.7916L46.1548 62.6437L46.1197 62.4961H46.1194L46.0846 62.3482L46.0495 62.2006L46.015 62.0527H46.0147L45.9802 61.9048L45.9451 61.7572L45.9103 61.6096L45.8752 61.462L45.8404 61.3141L45.8053 61.1668L45.7708 61.0192L45.736 60.8716L45.7012 60.7243L45.6664 60.5767L45.6316 60.4294L45.5965 60.2818L45.562 60.1345L45.5275 59.9869C44.7724 56.7679 41.5447 43.1923 41.2459 41.0032C40.7782 37.5787 42.0952 33.5872 43.6768 31.2232C44.7415 29.6308 45.52 29.245 46.7359 28.1422L46.7341 28.1425Z" fill="#9933CC"/>
                        </svg>
                        <h4 className="page-logo-text">Cubes</h4>
                    </div>

                   <ul>
                        <li><a href="#">Exchange</a></li>
                        <li><a href="#">Markets</a></li>
                        <li><a href="#">Support</a></li>
                        <li><button className="btn btn-default br-20 ml-3 btn-md">Sign In</button></li>
                        <li><button className="btn btn-purple br-20 ml-3 btn-sm">Create account</button></li>
                    </ul> 

                    <div className="mobile-menu-drawer">
                        <button className="btn-transparent" onClick={ handleShow } >
                            <img src={ process.env.PUBLIC_URL + "/img/hamburger-menu-white.png" } alt="page logo" className="page-logo"/> 
                        </button>
                    </div>

                </nav>

                

            </div>
        </header>

    );
}

export default Header