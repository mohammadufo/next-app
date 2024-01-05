import { FC } from 'react'

interface LoadSvgIconProps {
  name: string
  size?: number
  color?: string
  weight?: number
  fill?: string
}

const SvgIcon: FC<LoadSvgIconProps> = ({
  name,
  size = 24,
  color = '#686D71',
  weight = 1,
  fill = 'none',
}) => {
  const returnIconWithName = ({
    name,
    size,
    color,
    weight,
    fill,
  }: LoadSvgIconProps) => {
    switch (name) {
      case 'telegram':
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.87499 10.5391L13.8984 16.7187C13.9796 16.7906 14.0781 16.8401 14.1841 16.8624C14.2902 16.8847 14.4003 16.879 14.5035 16.8459C14.6068 16.8128 14.6996 16.7535 14.7729 16.6736C14.8463 16.5938 14.8976 16.4963 14.9219 16.3906L17.8594 3.56249C17.884 3.45202 17.8782 3.33692 17.8425 3.2295C17.8068 3.12208 17.7426 3.02637 17.6568 2.95257C17.571 2.87878 17.4667 2.82968 17.3552 2.81051C17.2436 2.79134 17.129 2.80283 17.0234 2.84374L2.60155 8.5078C2.02343 8.73437 2.10155 9.57812 2.71093 9.70312L6.87499 10.5391Z"
              stroke="#686D71"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.875 10.5391L17.5078 2.85938"
              stroke="#686D71"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.3828 13.625L7.94531 16.0625C7.85835 16.1508 7.7471 16.2113 7.62571 16.2362C7.50431 16.2611 7.37824 16.2494 7.26352 16.2025C7.1488 16.1556 7.05061 16.0757 6.98143 15.9728C6.91225 15.87 6.87521 15.7489 6.875 15.625V10.5391"
              stroke="#686D71"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case 'phone':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.65482 0.66883C8.65482 0.491728 8.72517 0.32188 8.8504 0.19665C8.97563 0.0714199 9.14548 0.0010664 9.32258 0.0010664C11.093 0.00301066 12.7904 0.70717 14.0422 1.95905C15.2941 3.21093 15.9983 4.90828 16.0002 6.6787C16.0002 6.8558 15.9299 7.02565 15.8046 7.15088C15.6794 7.27611 15.5095 7.34647 15.3324 7.34647C15.1553 7.34647 14.9855 7.27611 14.8603 7.15088C14.735 7.02565 14.6647 6.8558 14.6647 6.6787C14.6631 5.26237 14.0998 3.90451 13.0983 2.90302C12.0968 1.90152 10.7389 1.33818 9.32258 1.33659C9.14548 1.33659 8.97563 1.26624 8.8504 1.14101C8.72517 1.01578 8.65482 0.845932 8.65482 0.66883ZM9.32258 4.00765C10.031 4.00765 10.7104 4.28906 11.2113 4.78998C11.7122 5.2909 11.9936 5.97029 11.9936 6.6787C11.9936 6.8558 12.064 7.02565 12.1892 7.15088C12.3144 7.27611 12.4843 7.34647 12.6614 7.34647C12.8385 7.34647 13.0083 7.27611 13.1336 7.15088C13.2588 7.02565 13.3292 6.8558 13.3292 6.6787C13.3281 5.61642 12.9056 4.59794 12.1545 3.84679C11.4033 3.09564 10.3849 2.67318 9.32258 2.67212C9.14548 2.67212 8.97563 2.74247 8.8504 2.8677C8.72517 2.99293 8.65482 3.16278 8.65482 3.33988C8.65482 3.51699 8.72517 3.68683 8.8504 3.81206C8.97563 3.93729 9.14548 4.00765 9.32258 4.00765ZM15.3945 11.1788C15.7815 11.5668 15.9988 12.0925 15.9988 12.6405C15.9988 13.1885 15.7815 13.7142 15.3945 14.1022L14.7869 14.8027C9.31791 20.0386 -3.9906 6.73346 1.16453 1.24711L1.93245 0.57935C2.32094 0.203183 2.8419 -0.0049107 3.38264 8.80176e-05C3.92337 0.00508674 4.4404 0.222776 4.82186 0.60606C4.84256 0.626761 6.07993 2.23407 6.07993 2.23407C6.44708 2.61979 6.65147 3.13216 6.6506 3.66469C6.64973 4.19721 6.44367 4.70891 6.07525 5.09343L5.30198 6.06569C5.72992 7.10548 6.3591 8.05045 7.15336 8.84633C7.94763 9.6422 8.89133 10.2733 9.93025 10.7033L10.9085 9.92537C11.2931 9.55724 11.8047 9.35142 12.3371 9.35068C12.8694 9.34993 13.3816 9.55431 13.7672 9.92136C13.7672 9.92136 15.3738 11.1581 15.3945 11.1788ZM14.4757 12.1497C14.4757 12.1497 12.8778 10.9203 12.8571 10.8996C12.7195 10.7632 12.5336 10.6867 12.3399 10.6867C12.1461 10.6867 11.9603 10.7632 11.8227 10.8996C11.8047 10.9183 10.4578 11.9914 10.4578 11.9914C10.367 12.0637 10.259 12.111 10.1444 12.1288C10.0297 12.1466 9.91244 12.1343 9.80404 12.0929C8.45814 11.5918 7.23565 10.8073 6.21938 9.79254C5.20311 8.77776 4.4168 7.55643 3.91371 6.21127C3.8691 6.10139 3.85456 5.98162 3.87157 5.86426C3.88859 5.7469 3.93655 5.63619 4.01053 5.5435C4.01053 5.5435 5.08363 4.19596 5.10166 4.1786C5.23806 4.04103 5.31459 3.85514 5.31459 3.66141C5.31459 3.46768 5.23806 3.2818 5.10166 3.14423C5.08096 3.1242 3.8516 1.5249 3.8516 1.5249C3.71197 1.3997 3.52974 1.33265 3.34227 1.33749C3.15479 1.34233 2.97626 1.4187 2.84328 1.55095L2.07536 2.21871C-1.69216 6.74882 9.84077 17.642 13.8106 13.8905L14.4189 13.1894C14.5615 13.0574 14.6471 12.8751 14.6577 12.681C14.6683 12.487 14.603 12.2965 14.4757 12.1497Z"
              fill="#686D71"
            />
          </svg>
        )
      case 'mail':
        return (
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8184 0H3.63658C2.67251 0.00115481 1.74826 0.384641 1.06656 1.06634C0.384855 1.74804 0.00136843 2.67229 0.000213623 3.63636L0.000213623 12.3636C0.00136843 13.3277 0.384855 14.252 1.06656 14.9337C1.74826 15.6154 2.67251 15.9988 3.63658 16H13.8184C14.7825 15.9988 15.7067 15.6154 16.3884 14.9337C17.0701 14.252 17.4536 13.3277 17.4548 12.3636V3.63636C17.4536 2.67229 17.0701 1.74804 16.3884 1.06634C15.7067 0.384641 14.7825 0.00115481 13.8184 0ZM3.63658 1.45455H13.8184C14.2539 1.4554 14.6791 1.58656 15.0395 1.83113C15.3998 2.0757 15.6787 2.42251 15.8402 2.82691L10.2708 8.39709C9.86089 8.80532 9.30597 9.03452 8.72749 9.03452C8.149 9.03452 7.59408 8.80532 7.18421 8.39709L1.61476 2.82691C1.77632 2.42251 2.05521 2.0757 2.41552 1.83113C2.77584 1.58656 3.2011 1.4554 3.63658 1.45455ZM13.8184 14.5455H3.63658C3.05792 14.5455 2.50297 14.3156 2.0938 13.9064C1.68463 13.4972 1.45476 12.9423 1.45476 12.3636V4.72727L6.15585 9.42546C6.83849 10.1064 7.76331 10.4888 8.72749 10.4888C9.69166 10.4888 10.6165 10.1064 11.2991 9.42546L16.0002 4.72727V12.3636C16.0002 12.9423 15.7703 13.4972 15.3612 13.9064C14.952 14.3156 14.397 14.5455 13.8184 14.5455Z"
              fill="#686D71"
            />
          </svg>
        )
      case 'instagram':
        return (
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.87583 1.44133C11.1242 1.44133 11.3909 1.44933 12.2786 1.488C13.1965 1.528 14.1418 1.72667 14.8106 2.362C15.4857 3.00333 15.6885 3.89267 15.7306 4.76733C15.7713 5.61067 15.7797 5.864 15.7797 8C15.7797 10.136 15.7713 10.3893 15.7306 11.2327C15.6892 12.1 15.4751 13.0067 14.8106 13.638C14.1355 14.2793 13.2 14.472 12.2786 14.512C11.3909 14.5507 11.1242 14.5587 8.87583 14.5587C6.6274 14.5587 6.36074 14.5507 5.47302 14.512C4.56705 14.4727 3.60004 14.2647 2.94109 13.638C2.26951 13 2.06319 12.102 2.02109 11.2327C1.98039 10.3893 1.97197 10.136 1.97197 8C1.97197 5.864 1.98039 5.61067 2.02109 4.76733C2.06249 3.90333 2.27863 2.99133 2.94109 2.362C3.61477 1.722 4.55442 1.528 5.47302 1.488C6.36074 1.44933 6.6274 1.44133 8.87583 1.44133ZM8.87583 0C6.58881 0 6.30179 0.00933333 5.40354 0.048C4.10179 0.104667 2.80916 0.448667 1.86811 1.34267C0.923545 2.24 0.564948 3.46533 0.505299 4.70133C0.464598 5.55467 0.454773 5.82733 0.454773 8C0.454773 10.1727 0.464598 10.4453 0.505299 11.2987C0.564948 12.534 0.928457 13.7653 1.86811 14.6573C2.81197 15.554 4.1039 15.8953 5.40354 15.952C6.30179 15.9907 6.58881 16 8.87583 16C11.1628 16 11.4499 15.9907 12.3481 15.952C13.6492 15.8953 14.9432 15.5507 15.8835 14.6573C16.8288 13.7593 17.1867 12.5347 17.2464 11.2987C17.2871 10.4453 17.2969 10.1727 17.2969 8C17.2969 5.82733 17.2871 5.55467 17.2464 4.70133C17.1867 3.46467 16.8239 2.236 15.8835 1.34267C14.9411 0.447333 13.6456 0.104 12.3481 0.048C11.4499 0.00933333 11.1628 0 8.87583 0Z"
              fill="#686D71"
            />
            <path
              d="M8.87582 3.892C6.48775 3.892 4.55161 5.73133 4.55161 8C4.55161 10.2687 6.48775 12.108 8.87582 12.108C11.2639 12.108 13.2 10.2687 13.2 8C13.2 5.73133 11.2639 3.892 8.87582 3.892ZM8.87582 10.6667C7.32564 10.6667 6.0688 9.47267 6.0688 8C6.0688 6.52733 7.32564 5.33333 8.87582 5.33333C10.426 5.33333 11.6828 6.52733 11.6828 8C11.6828 9.47267 10.426 10.6667 8.87582 10.6667Z"
              fill="#686D71"
            />
            <path
              d="M13.3713 4.68935C13.9294 4.68935 14.3818 4.25954 14.3818 3.72935C14.3818 3.19915 13.9294 2.76935 13.3713 2.76935C12.8132 2.76935 12.3607 3.19915 12.3607 3.72935C12.3607 4.25954 12.8132 4.68935 13.3713 4.68935Z"
              fill="#686D71"
            />
          </svg>
        )
      case 'success':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="37"
            viewBox="0 0 38 37"
            fill="none"
          >
            <circle cx="19" cy="18.5" r="18.5" fill="#29A574" />
            <path
              d="M9.5 19.4548L15.0459 25.0006"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M15.4004 25L28.4004 12"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        )
      case 'acceptable':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="37"
            viewBox="0 0 38 37"
            fill="none"
          >
            <circle cx="19" cy="18.5" r="18.5" fill="#FFB82A" />
            <path
              d="M9.5 19.4548L15.0459 25.0007"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M15.4004 25L28.4004 12"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        )
      case 'mismatch':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="37"
            viewBox="0 0 38 37"
            fill="none"
          >
            <circle cx="19" cy="18.5" r="18.5" fill="#FF5D5D" />
            <path
              d="M12 12L25 25"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M12 25L25 12"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        )
      case 'download':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M14.7583 10.5917C14.6808 10.5136 14.5886 10.4516 14.4871 10.4092C14.3855 10.3669 14.2766 10.3452 14.1666 10.3452C14.0566 10.3452 13.9477 10.3669 13.8461 10.4092C13.7446 10.4516 13.6524 10.5136 13.5749 10.5917L10.8333 13.3333V4.99999C10.8333 4.77898 10.7455 4.56701 10.5892 4.41073C10.4329 4.25445 10.2209 4.16666 9.99993 4.16666C9.77891 4.16666 9.56695 4.25445 9.41067 4.41073C9.25439 4.56701 9.16659 4.77898 9.16659 4.99999V13.3333L6.42493 10.5917C6.34746 10.5136 6.25529 10.4516 6.15374 10.4092C6.05219 10.3669 5.94327 10.3452 5.83326 10.3452C5.72325 10.3452 5.61433 10.3669 5.51278 10.4092C5.41123 10.4516 5.31906 10.5136 5.24159 10.5917C5.08639 10.7478 4.99927 10.959 4.99927 11.1792C4.99927 11.3993 5.08639 11.6105 5.24159 11.7667L8.82493 15.3417C9.13605 15.6546 9.55861 15.8315 9.99993 15.8333C10.4383 15.8293 10.8575 15.6526 11.1666 15.3417L14.7499 11.7667C14.9062 11.6116 14.9949 11.401 14.9964 11.1809C14.998 10.9607 14.9124 10.7489 14.7583 10.5917Z"
              fill="white"
              stroke="#6519FF"
              strokeWidth="0.5"
            />
          </svg>
        )

      case 'loading':
        return (
          <svg
            className="animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              style={{ opacity: '0.25' }}
              cx="12"
              cy="12"
              r="10"
              stroke={color}
              strokeWidth="4"
            ></circle>
            <path
              style={{ opacity: '0.75' }}
              fill={color}
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )

      default:
        break
    }
  }

  return <>{returnIconWithName({ name, size, color, weight, fill })}</>
}

export default SvgIcon
