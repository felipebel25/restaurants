import { FunctionComponent } from "react";

interface EatsyLogoProps {
  width?: number;
}

const EatsyLogo: FunctionComponent<EatsyLogoProps> = ({ width = 120 }) => {
  return (
    <svg
      width={width}
      viewBox="0 0 177 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.5889 66.6055C29.4813 70.0093 22.5992 75.703 13.7641 75.703C12.352 75.7265 10.9501 75.4591 9.64607 74.9176C8.34202 74.3762 7.16379 73.5723 6.18493 72.556C5.20606 71.5397 4.44759 70.3329 3.95683 69.011C3.46606 67.689 3.25356 66.2803 3.33257 64.8727C3.33257 59.0398 6.18457 52.0311 10.9586 46.1517C15.7327 40.2724 21.4677 36.7758 26.3038 36.7758C26.5382 36.7983 26.7747 36.7716 26.9982 36.6975C27.2217 36.6233 27.4272 36.5034 27.6015 36.3453C27.7758 36.1873 27.9151 35.9946 28.0104 35.7796C28.1057 35.5647 28.155 35.3322 28.155 35.0971C28.155 34.8621 28.1057 34.6296 28.0104 34.4146C27.9151 34.1997 27.7758 34.007 27.6015 33.8489C27.4272 33.6908 27.2217 33.5709 26.9982 33.4967C26.7747 33.4226 26.5382 33.396 26.3038 33.4184C23.9632 33.4184 12.3536 33.0935 12.3536 26.6572C12.3536 23.1451 15.2057 17.2194 19.2822 12.2375C23.8237 6.66761 28.9388 3.34116 32.9689 3.34116C33.5198 3.26527 34.081 3.33868 34.5937 3.55373C35.1064 3.76878 35.5517 4.1175 35.8829 4.5634C37.5414 6.97701 36.6269 12.7016 33.1704 21.5824L32.9224 22.2632C32.8428 22.4693 32.805 22.6892 32.8111 22.91C32.8172 23.1308 32.8671 23.3482 32.9579 23.5496C33.0487 23.751 33.1786 23.9325 33.3401 24.0835C33.5017 24.2345 33.6915 24.352 33.8988 24.4293C34.3162 24.5854 34.7785 24.5705 35.1849 24.3879C35.5914 24.2054 35.9091 23.8699 36.0689 23.4546C36.0689 23.2689 36.2239 23.0523 36.3169 22.8047C39.0294 15.796 41.7574 7.17816 38.6574 2.69132C38.0159 1.79866 37.1567 1.0843 36.1612 0.615882C35.1657 0.147469 34.0669 -0.0594464 32.9689 0.0147238C27.8693 0.0147238 21.9327 3.71246 16.6627 10.1333C12.0126 15.8424 8.99012 22.3406 8.99012 26.6882C8.99012 29.5814 10.3386 33.4494 16.7402 35.4917L17.8872 35.8321C14.2162 37.9489 10.9857 40.7481 8.37012 44.0785C3.13107 50.5303 0 58.3281 0 64.9036C0 71.7731 4.83609 79.0759 13.7952 79.0759C23.8393 79.0759 31.3103 72.8871 35.7744 69.2048C36.0774 68.9083 36.2575 68.5089 36.2789 68.0859C36.3004 67.6629 36.1616 67.2473 35.8901 66.9217C35.6187 66.5962 35.2344 66.3846 34.8138 66.3289C34.3932 66.2731 33.967 66.3774 33.6198 66.621L33.5889 66.6055Z"
        fill="white"
      />
      <path
        d="M118.561 26.487C118.994 26.5019 119.417 26.3497 119.742 26.0619C120.066 25.774 120.267 25.3727 120.303 24.941C120.338 24.5094 120.207 24.0804 119.934 23.7432C119.662 23.406 119.27 23.1863 118.84 23.1296C108.827 22.2632 95.8686 22.0002 83.8249 22.093C84.8169 19.1843 85.7005 16.7862 86.398 14.9141C87.018 13.3669 87.3745 12.4386 87.421 12.2993C87.4278 12.248 87.4278 12.196 87.421 12.1446V11.9744C87.4133 11.9231 87.4133 11.871 87.421 11.8197V11.6495C87.421 11.6495 87.421 11.5412 87.421 11.4948C87.421 11.4484 87.421 11.3865 87.421 11.3246V11.1854V11.0307C87.4011 10.9812 87.375 10.9344 87.3434 10.8914C87.3209 10.8433 87.2951 10.7967 87.266 10.7521L87.1575 10.6129L87.0489 10.5046C87.0152 10.4607 86.9731 10.4239 86.925 10.3963L86.8009 10.288L86.646 10.2107H86.5064H86.3669H86.1965H85.6539H85.4989C85.4423 10.2037 85.3851 10.2037 85.3284 10.2107H85.189L85.0494 10.288H84.9099L84.7859 10.3963C84.6985 10.463 84.6203 10.5411 84.5534 10.6284L84.4604 10.7676C84.3829 10.9069 84.3829 10.9069 84.3054 11.0461C83.9644 11.9126 83.5149 13.0575 82.9724 14.4654C81.9959 16.9409 80.9264 19.5093 79.7949 22.1085C67.3948 22.2787 56.3122 22.8202 51.3211 23.4082C50.8988 23.4653 50.5137 23.6797 50.243 24.0083C49.9723 24.3369 49.836 24.7555 49.8615 25.1801C49.887 25.6048 50.0723 26.0042 50.3804 26.2982C50.6884 26.5922 51.0965 26.7591 51.5226 26.7655H51.7241C56.3741 26.2085 66.5267 25.7134 78.2758 25.5123C71.2698 40.8449 62.4657 55.7907 57.0251 55.7907C56.8375 55.8169 56.6465 55.8028 56.4647 55.7494C56.283 55.6961 56.1147 55.6046 55.9711 55.4813C55.3046 54.6767 55.8781 52.0465 56.1571 50.8397C56.4981 49.2925 56.6997 48.3333 56.0332 47.4978C55.8586 47.2896 55.6405 47.1221 55.3941 47.0072C55.1477 46.8922 54.8791 46.8326 54.6071 46.8325C53.6151 46.8325 52.9641 47.4669 51.4141 48.9831C48.9651 51.3813 44.4235 55.8371 39.6495 55.8371C38.0995 55.8371 37.805 54.5375 37.805 53.439C37.805 48.5963 43.292 42.7325 50.1121 42.7325C54.3126 42.7325 55.5836 44.2797 56.7151 45.8268C56.962 46.1947 57.3417 46.4532 57.7749 46.5483C58.2081 46.6434 58.6614 46.5679 59.0401 46.3374C59.2329 46.2224 59.3999 46.0693 59.5311 45.8874C59.6622 45.7055 59.7545 45.4987 59.8024 45.2798C59.8504 45.0609 59.8528 44.8345 59.8097 44.6146C59.7666 44.3947 59.6788 44.1859 59.5517 44.0012C58.5019 42.4917 57.0847 41.2737 55.4333 40.4617C53.7819 39.6497 51.9508 39.2705 50.1121 39.3596C41.2925 39.3596 34.4414 46.9254 34.4414 53.4235C34.4414 56.8738 36.534 59.1791 39.6495 59.1791C44.904 59.1791 49.4456 55.4813 52.3906 52.6964C52.2173 53.5392 52.213 54.4079 52.378 55.2524C52.5429 56.0968 52.8738 56.9003 53.3516 57.6164C53.8011 58.1418 54.3673 58.5552 55.005 58.8238C55.6427 59.0924 56.3345 59.2087 57.0251 59.1636C62.0162 59.1636 67.8753 52.8201 74.9588 39.7619C71.8588 51.1491 68.7588 56.5179 66.5888 72.5622C66.5582 72.7808 66.5714 73.0032 66.6275 73.2166C66.6835 73.4301 66.7814 73.6303 66.9154 73.8058C67.0495 73.9813 67.217 74.1286 67.4083 74.2391C67.5997 74.3497 67.8111 74.4212 68.0303 74.4498H68.2628C68.668 74.4462 69.0584 74.2973 69.3629 74.0303C69.6673 73.7634 69.8655 73.3961 69.9213 72.9954C73.1918 48.9212 78.6014 38.0136 82.7089 25.4659C95.047 25.3266 108.455 25.5742 118.561 26.487Z"
        fill="white"
      />
      <path
        d="M176.175 33.6351C174.361 30.9739 167.929 30.7883 162.628 34.4087C157.978 37.6114 156.428 41.1389 156.428 44.6511C156.443 44.8001 156.418 44.9505 156.355 45.0866C156.293 45.2227 156.195 45.3394 156.071 45.4246C155.777 45.6722 143.671 55.2338 142.384 56.0384C142.872 52.8687 143.131 49.6681 143.159 46.4613C143.159 44.3107 142.059 42.1446 139.982 42.1446C137.378 42.1446 134.743 45.1617 131.41 48.9832C128.605 52.2013 124.745 56.5953 122.374 56.5953C122.002 56.5953 121.955 56.5953 121.924 56.4561C120.948 54.321 125.024 45.9352 126.249 44.4499C126.513 44.1082 126.636 43.6783 126.592 43.2488C126.548 42.8193 126.341 42.4229 126.013 42.1413C125.686 41.8597 125.262 41.7143 124.83 41.7351C124.398 41.7558 123.99 41.9412 123.691 42.2529C122.741 43.6201 121.906 45.064 121.196 46.5696C113.332 47.711 105.799 50.5003 99.0925 54.7542C97.2432 53.5196 95.269 52.4825 93.2025 51.6598C90.7844 50.5922 88.0409 49.37 88.0409 48.225C88.0409 46.4458 92.319 42.0363 97.9145 42.0363C98.5867 41.973 99.2647 42.0445 99.9089 42.2464C100.553 42.4483 101.15 42.7767 101.666 43.2122C101.949 43.6235 102.145 44.0878 102.244 44.5771C102.343 45.0663 102.341 45.5704 102.239 46.059C102.203 46.2764 102.211 46.4987 102.261 46.7131C102.312 46.9276 102.404 47.13 102.533 47.3089C102.662 47.4878 102.825 47.6396 103.012 47.7556C103.2 47.8717 103.409 47.9497 103.626 47.9852C103.844 48.0208 104.067 48.0132 104.282 47.9629C104.497 47.9125 104.699 47.8204 104.879 47.6918C105.058 47.5632 105.21 47.4007 105.326 47.2134C105.442 47.0262 105.52 46.8179 105.556 46.6005C105.748 45.631 105.729 44.6316 105.499 43.6703C105.269 42.7091 104.834 41.8087 104.223 41.0306C103.413 40.1946 102.426 39.5487 101.335 39.1393C100.244 38.7299 99.076 38.5674 97.9145 38.6635C90.9084 38.6635 84.6774 43.9858 84.6774 48.1786C84.6774 51.5051 88.3199 53.1297 91.823 54.6923C93.3488 55.3295 94.8298 56.0687 96.256 56.9048C93.032 59.6433 91.0945 62.583 91.0945 65.3215C91.045 65.8404 91.1042 66.3639 91.2683 66.8587C91.4324 67.3536 91.6977 67.809 92.0476 68.196C92.3974 68.583 92.824 68.8932 93.3003 69.1068C93.7767 69.3204 94.2923 69.4329 94.8145 69.437C95.8729 69.4229 96.918 69.2001 97.8898 68.7813C98.8616 68.3625 99.7409 67.7561 100.477 66.9968C101.213 66.2376 101.792 65.3406 102.179 64.3574C102.567 63.3742 102.756 62.3242 102.735 61.2679C102.754 59.816 102.321 58.3942 101.495 57.1987C107.04 53.7738 113.182 51.4223 119.599 50.2673C118.592 53.0677 118.049 55.9919 118.871 57.8795C119.176 58.5396 119.673 59.0922 120.298 59.465C120.924 59.8377 121.647 60.0132 122.374 59.9682C126.28 59.9682 130.124 55.5123 133.952 51.2112C135.642 49.2772 138.37 46.1518 139.641 45.6103C139.735 45.8894 139.782 46.1822 139.78 46.4768C139.696 50.7352 139.129 54.9704 138.091 59.1018C125.319 69.9321 117.941 80.1435 117.941 86.3168C117.862 86.8443 117.906 87.3827 118.068 87.8909C118.23 88.3991 118.506 88.8636 118.875 89.2488C119.245 89.634 119.698 89.9298 120.199 90.1135C120.701 90.2971 121.238 90.3638 121.769 90.3085C123.939 90.3085 126.419 88.6839 129.023 85.4503C131.663 82.08 133.91 78.4206 135.719 74.5427C138.013 69.7928 141.702 60.0456 141.919 59.8599C144.508 57.9259 157.699 48.2405 157.947 48.1013C158.074 48.0294 158.219 47.9917 158.365 47.9917C158.512 47.9917 158.656 48.0294 158.784 48.1013C162.054 49.4164 165.914 49.2462 170.61 46.0436C175.834 42.3613 178.004 36.2963 176.175 33.6351ZM94.7835 66.126C94.675 66.126 94.427 66.126 94.427 65.3679C94.427 63.6815 95.977 61.469 98.736 59.1791C99.128 59.805 99.3324 60.5298 99.325 61.2679C99.3457 61.8813 99.2443 62.4927 99.0266 63.0667C98.809 63.6407 98.4794 64.166 98.057 64.612C97.6347 65.0581 97.1279 65.4161 96.566 65.6653C96.0041 65.9146 95.3982 66.0501 94.7835 66.0641V66.126ZM132.588 73.1347C128.233 82.1394 123.707 87.0594 121.738 87.0594H121.304C121.277 86.854 121.277 86.646 121.304 86.4405C121.304 82.2941 126.512 73.7536 136.277 64.5479C135.204 67.4543 133.972 70.3002 132.588 73.0728V73.1347Z"
        fill="white"
      />
      <path
        d="M38.8899 97.6575C37.5696 96.9322 36.4714 95.8627 35.7124 94.5632C34.947 93.1855 34.5454 91.6361 34.5454 90.0608C34.5454 88.4855 34.947 86.9362 35.7124 85.5585C36.4745 84.2614 37.572 83.1926 38.8899 82.4642C40.2452 81.7356 41.7604 81.3542 43.2997 81.3542C44.839 81.3542 46.3543 81.7356 47.7095 82.4642C49.0099 83.1892 50.0831 84.2605 50.8096 85.5585C51.575 86.9362 51.9766 88.4855 51.9766 90.0608C51.9766 91.6361 51.575 93.1855 50.8096 94.5632C50.0858 95.8632 49.0119 96.9351 47.7095 97.6575C46.3543 98.3861 44.839 98.7674 43.2997 98.7674C41.7604 98.7674 40.2452 98.3861 38.8899 97.6575V97.6575ZM46.3145 95.5688C47.2117 95.0489 47.9386 94.2804 48.407 93.3564C48.8965 92.3155 49.1503 91.1798 49.1503 90.0299C49.1503 88.8801 48.8965 87.7444 48.407 86.7035C47.9338 85.7909 47.2073 85.0336 46.3145 84.5219C45.3849 84.0249 44.3466 83.7648 43.292 83.7648C42.2374 83.7648 41.1991 84.0249 40.2695 84.5219C39.3767 85.0336 38.6502 85.7909 38.1769 86.7035C37.6875 87.7444 37.4337 88.8801 37.4337 90.0299C37.4337 91.1798 37.6875 92.3155 38.1769 93.3564C38.6454 94.2804 39.3723 95.0489 40.2695 95.5688C41.1956 96.0767 42.2353 96.343 43.292 96.343C44.3487 96.343 45.3883 96.0767 46.3145 95.5688V95.5688Z"
        fill="white"
      />
      <path
        d="M58.3891 85.3575C59.136 84.957 59.9752 84.7596 60.8227 84.785V87.6782H60.1096C59.6566 87.646 59.2017 87.7032 58.7708 87.8466C58.34 87.9899 57.9416 88.2166 57.5986 88.5137C56.9539 89.3391 56.6539 90.3814 56.7616 91.4224V98.5395H53.9561V85.0016H56.7616V86.9665C57.1517 86.2958 57.7134 85.7405 58.3891 85.3575Z"
        fill="white"
      />
      <path
        d="M62.0162 88.096C62.5549 87.0858 63.3586 86.2408 64.3413 85.6514C65.3254 85.0683 66.452 84.7684 67.5963 84.785C68.5005 84.7857 69.394 84.981 70.2158 85.3574C71.0179 85.6997 71.7252 86.2305 72.2773 86.9046V80.3755H75.1139V98.5549H72.2773V96.5127C71.7847 97.2019 71.1301 97.7597 70.3708 98.1372C69.5093 98.5815 68.5504 98.8049 67.5808 98.787C66.4387 98.7914 65.3177 98.4809 64.3413 97.8896C63.3557 97.2767 62.5528 96.4111 62.0162 95.3832C61.4453 94.2516 61.1581 92.9987 61.1792 91.7319C61.1524 90.4694 61.44 89.2201 62.0162 88.096ZM71.7038 89.3337C71.36 88.6969 70.85 88.1649 70.2278 87.7941C69.6056 87.4233 68.8945 87.2275 68.1698 87.2275C67.4451 87.2275 66.734 87.4233 66.1118 87.7941C65.4896 88.1649 64.9795 88.6969 64.6358 89.3337C64.2292 90.0777 64.026 90.9155 64.0467 91.7628C64.0319 92.6193 64.2346 93.4656 64.6358 94.2228C65.0031 94.8687 65.5387 95.4033 66.1858 95.77C66.7984 96.1233 67.4932 96.31 68.2008 96.3115C68.9095 96.3191 69.6067 96.1318 70.2158 95.77C70.8653 95.4065 71.4017 94.8711 71.7658 94.2228C72.1636 93.4704 72.3611 92.6287 72.3393 91.7783C72.3486 90.9216 72.1292 90.0778 71.7038 89.3337V89.3337Z"
        fill="white"
      />
      <path
        d="M90.1335 92.8149H79.7639C79.8163 93.8089 80.2491 94.7449 80.9729 95.4296C81.7044 96.0822 82.6582 96.431 83.6389 96.4044C84.2997 96.4475 84.9581 96.2904 85.5279 95.9535C86.0977 95.6167 86.5522 95.1159 86.8319 94.5168H89.932C89.5271 95.7542 88.7472 96.8355 87.6999 97.6112C86.533 98.4335 85.1285 98.8519 83.7009 98.8025C82.4805 98.8231 81.2767 98.5188 80.2133 97.9206C79.1902 97.3457 78.3517 96.4926 77.7953 95.4606C77.2002 94.3311 76.9016 93.0696 76.9273 91.7937C76.9021 90.5148 77.1951 89.2496 77.7799 88.1114C78.3188 87.081 79.1487 86.2311 80.1668 85.6669C81.2509 85.0819 82.4688 84.7886 83.7009 84.816C84.8958 84.7949 86.0759 85.0827 87.1264 85.6514C88.1117 86.1943 88.9231 87.0042 89.4669 87.9877C90.0405 89.0572 90.3288 90.256 90.304 91.4688C90.2884 91.9218 90.2313 92.3723 90.1335 92.8149ZM87.3124 90.556C87.3217 90.0844 87.2264 89.6165 87.0335 89.1859C86.8406 88.7553 86.5547 88.3726 86.1964 88.065C85.4486 87.4349 84.493 87.1041 83.5149 87.1367C82.5949 87.1176 81.7024 87.4495 81.0194 88.065C80.3117 88.712 79.8745 89.6015 79.7949 90.556H87.3124Z"
        fill="white"
      />
      <path
        d="M96.504 85.3574C97.2457 84.9582 98.0796 84.7608 98.922 84.7849V87.6782H98.209C97.7582 87.6446 97.3053 87.7012 96.8768 87.8446C96.4483 87.9881 96.0527 88.2156 95.7134 88.5137C95.0572 89.3337 94.751 90.3786 94.8609 91.4224V98.5394H92.0554V85.0016H94.8609V86.9665C95.2571 86.2951 95.8239 85.74 96.504 85.3574V85.3574Z"
        fill="white"
      />
      <path
        d="M102.456 98.1836C101.663 97.8489 100.969 97.3161 100.441 96.6364C99.9531 95.9933 99.6768 95.2149 99.6506 94.4085H102.565C102.589 94.6933 102.676 94.9694 102.818 95.2178C102.959 95.4662 103.153 95.6809 103.386 95.8474C103.929 96.2442 104.59 96.446 105.262 96.4199C105.907 96.4556 106.549 96.2995 107.106 95.9712C107.305 95.8459 107.469 95.6724 107.583 95.4668C107.697 95.2612 107.757 95.0302 107.757 94.7953C107.762 94.5562 107.695 94.3211 107.565 94.12C107.435 93.9189 107.249 93.7609 107.029 93.6659C106.29 93.3299 105.522 93.0606 104.735 92.8613C103.887 92.6393 103.053 92.3654 102.239 92.0413C101.598 91.7761 101.03 91.3624 100.581 90.8345C100.088 90.2351 99.8396 89.4731 99.8831 88.6994C99.8764 87.9882 100.099 87.2938 100.519 86.719C100.987 86.0906 101.62 85.6034 102.348 85.311C103.218 84.9581 104.152 84.7844 105.091 84.8005C106.434 84.7356 107.758 85.1466 108.827 85.9609C109.303 86.3463 109.689 86.8315 109.957 87.3823C110.225 87.9331 110.368 88.5359 110.377 89.1481H107.571C107.555 88.8674 107.481 88.5932 107.352 88.3428C107.224 88.0924 107.045 87.8714 106.827 87.6937C106.309 87.3112 105.673 87.1199 105.029 87.1522C104.432 87.1152 103.837 87.2609 103.324 87.57C103.14 87.6916 102.99 87.8573 102.887 88.0519C102.784 88.2466 102.732 88.4639 102.735 88.6839C102.732 88.8538 102.767 89.0222 102.837 89.1773C102.906 89.3324 103.009 89.4703 103.138 89.5813C103.414 89.8423 103.741 90.0426 104.099 90.1692C104.471 90.3085 105.029 90.4786 105.773 90.6952C106.598 90.9046 107.406 91.1734 108.191 91.4998C108.824 91.7651 109.386 92.1729 109.834 92.6911C110.312 93.2811 110.565 94.0213 110.547 94.7798C110.553 95.5148 110.331 96.2336 109.912 96.8376C109.448 97.4672 108.821 97.9592 108.098 98.261C107.232 98.6306 106.296 98.81 105.355 98.787C104.356 98.8017 103.366 98.5957 102.456 98.1836V98.1836Z"
        fill="white"
      />
    </svg>
  );
};

export default EatsyLogo;
