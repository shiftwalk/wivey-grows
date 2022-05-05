import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
import Link from 'next/link'

export default function Header({ active }) {
  return (
    <header className="absolute top-0 left-0 right-0 w-full z-50">
      <div className="bg-green-light text-off-white py-2">
        <Container>
          <div className="text-center">
            <span className="block uppercase">Wivey Grows is officially launched!</span>
          </div>
        </Container>
      </div>
      <div className="text-off-white py-6">
        <Container>
          <div className="w-full">
            <nav className="flex flex-wrap space-x-3 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl w-full font-display leading-none md:leading-none lg:leading-none xl:leading-none 2xl:leading-none">
              <Link href="/">
                <a className="mr-auto text-off-whit hover:text-green-light">
                <svg className="w-24 md:w-24 xl:w-28 2xl:w-32" viewBox="0 0 107 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.609 27.098c.37.25.367.626.336 1.004-.02.52-.06 1.042-.067 1.564.036.236.096.47.179.695.235-.463.397-.745.528-1.043 1.072-2.44 2.133-4.889 3.207-7.329 1.24-2.806 2.487-5.61 3.743-8.41.24-.469.336-.995.273-1.515a21.177 21.177 0 0 1-.071-2.224c-.054-1.328-.152-2.652-.179-3.98-.027-1.45.024-2.899 0-4.348 0-.64.475-.984.785-1.417.054-.075.29-.062.431-.04.53.083 1.051.217 1.58.28.376.026.753.026 1.129 0 .094 0 .185-.04.28-.046 1.151-.092 1.734.655 1.29 1.695-.122.285-.223.505.02.75l-.02-.019c.117.476.204.96.259 1.446.128 2.558.226 5.115.337 7.673.114 2.715.215 5.43.336 8.145.135 2.656.297 5.31.459 7.962.03.505-.101 1.036.225 1.702.169-.44.283-.718.384-1 .428-1.224.587-2.525 1.284-3.673.236-.39.155-.944.3-1.4.987-3.076 1.963-6.152 3.008-9.208a427.146 427.146 0 0 1 3.49-9.837c.336-.941.545-1.912.872-2.853.209-.603.441-1.033 1.182-1.111.522-.056 1.01-.374 1.55.101-.175.61-.337 1.266-.553 1.905-.788 2.42-1.59 4.837-2.388 7.257-.229.702-.448 1.407-.69 2.105-.57 1.64-1.16 3.263-1.715 4.902-.428 1.26-.798 2.538-1.236 3.794-.61 1.758-1.267 3.502-1.887 5.247-.525 1.482-1.047 2.95-1.532 4.456-.694 2.154-1.348 4.322-2.021 6.48-.23.708-.536 1.393-.802 2.088a1.258 1.258 0 0 1-.421.604c-.198.156-.44.252-.694.275-1.163.17-2.344.196-3.514.075-.438-.049-.592-.278-.596-.685 0-.557-.057-1.111-.07-1.669-.054-2.105-.088-4.21-.152-6.315-.07-2.296-.182-4.571-.243-6.86-.033-1.387 0-2.771 0-4.158 0-.456-.087-.908-.151-1.502-.142.18-.271.368-.388.564-1.347 2.768-2.358 5.666-3.61 8.473-.59 1.328-1.254 2.623-1.837 3.955-.485 1.105-.902 2.24-1.347 3.364-.488 1.24-.96 2.489-1.465 3.725a1.31 1.31 0 0 1-.476.688 1.37 1.37 0 0 1-.804.273c-.98.02-1.957.095-2.938.128-.64.02-.828-.164-.828-.84 0-1.967.033-3.905.037-5.856 0-2.168-.034-4.335 0-6.502.03-3.319.131-6.637.124-9.952 0-2.447-.11-4.893-.205-7.339C.249 7.119.097 4.896 0 2.669.006 2.051.055 1.435.145.823a.57.57 0 0 1 .193-.41.603.603 0 0 1 .437-.154C1.627.184 2.459.079 3.328 0c.158.007.314.038.462.092.427.098.848.226 1.283.295.748.115.771.108.792.856V3.01c-.048 1.354-.122 2.709-.149 4.063 0 .36.142.721.155 1.085.061 1.515.106 3.03.135 4.542 0 .77-.023 1.544-.037 2.318-.074.134-.25.328-.209.394.337.603-.067 1.252.155 1.859.03.12.041.244.03.367v8.729c0 .302.095.64-.336.747.015.021.026.045.033.07a.163.163 0 0 1 0 .065l-.033-.15ZM18.877 12.55l-.02-.023.02.023Zm-.033-1.67c-.064.05-.122.07-.132.103a.298.298 0 0 0 0 .16.254.254 0 0 0 .111 0c.024-.082.02-.157.02-.262ZM65.893 19.728a13.42 13.42 0 0 1 .371-2.536 5.1 5.1 0 0 0 .14-1.361c-.001-.754.075-1.506.228-2.244.434-2.859.868-5.718 1.325-8.57.165-.999.447-1.997.517-3.026.036-.426.139-.844.304-1.238a.929.929 0 0 1 .54-.46 3.66 3.66 0 0 1 1.014-.116c2.474-.033 4.945-.05 7.416-.08l6.85-.09a3.7 3.7 0 0 1 .47 0c.779.084 1.193.486 1.17 1.285a14.21 14.21 0 0 1-.269 2.04c-.066.367-.278.523-.731.526-2.32 0-4.621.077-6.933.127-.968.023-1.935.046-2.902.09-.633.03-.679.086-.765.699-.255 1.83-.497 3.66-.755 5.495a447.897 447.897 0 0 1-.805 5.495c-.288 1.887-.62 3.768-.888 5.658-.14.962-.331.972.805 1.059 1.716.126 3.432.233 5.144.379a9.388 9.388 0 0 1 1.749.303c.296.092.545.296.696.569.097.304.097.631 0 .935-.219.83-.6 1.092-1.445 1.102h-.092c-2.243-.42-4.495.1-6.744-.093-.766-.067-.792 0-.895.722-.198 1.398-.35 2.803-.55 4.2-.205 1.462-.44 2.916-.662 4.377-.026.153-.066.306-.083.463-.06.546-.02.606.49.695.22.037.44.06.663.07 2.839.173 5.68.333 8.53.263.093-.005.187-.005.28 0 .594.044 1.349.04 1.558.626.275.776.33 1.664-.226 2.42a1.15 1.15 0 0 1-1.01.386c-1.533 0-3.067.033-4.6.026-1.783 0-3.568-.06-5.35-.07-1.16 0-2.319.037-3.472.047-1.063 0-2.126.017-3.186 0-.62 0-.772-.19-.686-.822.68-4.992 1.371-9.958 2.03-14.94.084-.633.375-1.202.358-1.865a11.94 11.94 0 0 1 .212-1.96c.05-.211.123-.416.216-.613l-.063.04.036-.013ZM80.05 2.254c-.02 0-.053.023-.056.043-.003.02.017.04.026.064l.097-.074-.067-.033ZM49.255 5.99c.438.957.431 1.985.57 3.004.1.761-.02 1.568.165 2.316.442 1.733.489 3.51.738 5.262.128.897.2 1.8.294 2.7.026.26 0 .509-.338.565a.37.37 0 0 0-.03-.063h-.05l.097.046c.2.222.435.39.459.751.098 1.413.226 2.825.37 4.234.146 1.41.338 2.901.526 4.35 0 .07.122.126.19.189l-.018.056v-.033c.338-.473.257-1.181.857-1.519.044-.023.05-.112.064-.172.36-1.895 1.348-3.552 2.06-5.318 1.075-2.703 2.235-5.369 3.371-8.048.937-2.22 1.834-4.46 2.852-6.642C62.45 5.485 63.3 3.159 64.335.946c.169-.367.263-.863.725-.91a9.231 9.231 0 0 1 1.783.08c.078 0 .159.218.192.33.087.426.029.868-.165 1.258-1.524 3.701-3.034 7.413-4.551 11.114-.307.74-.503 1.545-1.082 2.157h.02c.131.532-.21.952-.384 1.399-.675 1.71-1.396 3.4-2.1 5.1l-.223.063-.101.05h.053a.274.274 0 0 0 .027-.066.65.65 0 0 0 .18.026l-.955 2.054-.02-.162-.105.08.145.066c-.108.33-.317.615-.3 1.028-.006.41-.16.804-.435 1.112-.37.403-.404.913-.633 1.353-.392.764-.594 1.617-.914 2.418a289.807 289.807 0 0 1-2.306 5.623c-.475 1.125-1.011 2.22-1.51 3.34-.388.897-1.012 1.37-2.044 1.344-.92-.023-1.844.08-2.764.119-.6.023-.752-.053-.89-.596a7.066 7.066 0 0 1-.236-1.472 311.298 311.298 0 0 1-.158-5.606c0-.715.016-1.43.016-2.144a1.509 1.509 0 0 0-.067-.552c-.465-1.18-.364-2.438-.502-3.658-.172-1.519-.186-3.053-.29-4.578-.071-.993-.186-1.985-.28-2.957-.138-1.416-.29-2.829-.408-4.244-.135-1.615-.243-3.232-.357-4.85v-.562c-.034-.747.087-1.488-.145-2.252-.169-.556 0-1.208-.04-1.81-.041-.602-.193-1.227-.26-1.842a18.987 18.987 0 0 1-.132-1.955c0-.615.047-.602.674-.77a2.916 2.916 0 0 1 1.298 0c.693.067 1.39.084 2.084.049.252-.02.506-.02.758 0 .675.112.934.46.91 1.15-.001.282.016.562.051.841.091 1.019.192 2.038.287 3.056.027.275.047.55.07.824l.082.096h-.068l-.01-.1Zm-3.81 22.196-.04-.03v.056l.04-.026Zm11.267-2.49-.033.045h.05l-.017-.046Zm-1.54 3.78-.03.046h.05l-.02-.046ZM94.883 29.611c-.606 1.9-.711 3.912-1.13 5.835-.265 1.227-.518 2.46-.758 3.699-.086.44-.299.593-.758.603-1.33.03-2.662.117-3.993.173-.246 0-.495-.023-.741 0a.406.406 0 0 1-.452-.292.4.4 0 0 1-.004-.194c-.001-.43.034-.86.105-1.284.594-3.26 1.204-6.539 1.807-9.804.311-1.695.656-3.384.924-5.085.138-.867.584-1.63.656-2.532.052-.214.08-.433.082-.652-.164-1.63-.279-3.26-.436-4.863-.088-.942-.226-1.88-.328-2.82-.164-1.395-.302-2.79-.488-4.181-.207-1.522-.466-3.035-.68-4.563a16.492 16.492 0 0 1-.153-1.839c-.02-.622.183-.808.826-.857.833-.062 1.669-.16 2.502-.156.734.016 1.467.081 2.193.195.446.065.557.326.511.805a4.412 4.412 0 0 0 0 .906c.207 1.832.414 3.667.656 5.492.092.724.24 1.441.384 2.155.197.978.416 1.955.656 3.08.297-.317.57-.655.82-1.01.534-.952 1.239-1.81 1.861-2.712.309-.447.594-.913.889-1.37l3.964-6.13c.098-.153.164-.326.259-.489.074-.132.164-.255.269-.365.328-.326 2.151-.378 2.482-.072a.54.54 0 0 1 .078.743c-.311.496-.619.995-.908 1.503-1.003 1.763-1.967 3.553-3.003 5.283-1.367 2.282-2.823 4.472-4.213 6.724-.807 1.304-1.58 2.627-1.876 4.182-.58 3.08-1.229 6.147-1.852 9.218-.04.146-.089.29-.147.43v.225l-.004.02Zm-.452-4.72-.036.063h.059l-.023-.062ZM32.233 39.885c-.442 0-.885-.026-1.341 0-.457.027-.574-.183-.544-.56.087-1.068.138-2.139.279-3.196.335-2.489.714-4.974 1.076-7.46.002-.063.009-.125.02-.186.49-1.278.507-2.636.671-3.967.202-1.561.45-3.116.695-4.67.545-3.508 1.099-7.014 1.66-10.52.342-2.146.678-4.29 1.006-6.432.104-.65.198-1.304.272-1.958a.826.826 0 0 1 .517-.785.839.839 0 0 1 .325-.062c.312-.024.624-.054.94-.064.69 0 1.381-.033 2.076-.023.583 0 .543.093.724.694.336 1.094-.164 2.098-.211 3.146-.054 1.237-.487 2.418-.473 3.686a25.224 25.224 0 0 1-.39 3.563c-.217 1.588-.462 3.173-.704 4.76-.749 4.878-1.5 9.757-2.254 14.636-.315 2.052-.61 4.107-.97 6.152-.137.768-.432 1.508-.63 2.265-.17.668-.637.891-1.261.928l-1.516.093.033-.04Zm2.791-27.476-.037.017.027.043.01-.06ZM36.89 1.994a.755.755 0 0 0 .104-.104s-.017-.077-.023-.073a.79.79 0 0 0-.128.03c.01.036.027.083.044.133l.003.014Zm-1.301 5.08.03-.043h-.047l.017.043Zm-1.342 31.724-.034.056h.06l-.026-.056ZM36.677 52.79c1.121 1.158 2.188 2.378 3.39 3.453a9.464 9.464 0 0 0 6.826 2.414c.772-.026 1.538-.357 2.294-.59.382-.115.85-.374 1.067.04.216.413-.285.678-.595.898-.853.607-1.852.79-2.857.862a9.661 9.661 0 0 1-5.75-1.45 17.998 17.998 0 0 1-3.835-3.279c-.527-.557-1.057-1.108-1.584-1.666a1.03 1.03 0 0 0-.97-.357c-.571.085-1.156.072-1.735.121-.578.05-.646.118-.72.722-.075.603-.114 1.292-.194 1.934a.775.775 0 0 1-.245.489.754.754 0 0 1-.502.2c-.83.112-1.037-.082-.87-.938.366-1.882.783-3.752 1.138-5.634.385-2.034.708-4.08 1.086-6.114.323-1.666.4-1.57 1.813-1.574.94 0 1.888.069 2.822.164.423.055.837.172 1.228.348 1.454.616 1.683 1.148 1.677 2.748 0 1.515-.42 2.991-.895 4.438a3.867 3.867 0 0 1-.814 1.49c-.377.43-.845.767-1.368.989-.111.055-.219.116-.323.184a.855.855 0 0 0-.084.108Zm-2.873-.82c.349-.04.97-.082 1.558-.19a2.812 2.812 0 0 0 1.482-.657c.421-.36.73-.838.887-1.373.266-.754.494-1.52.685-2.296.138-.726.217-1.462.236-2.2.029-.657-.324-1.054-.899-1.372-1.089-.61-2.236-.397-3.37-.347-.133 0-.308.187-.372.328-.083.232-.14.473-.171.718-.403 2.118-.805 4.24-1.206 6.362-.2 1.037-.165 1.083 1.17 1.037v-.01ZM57.271 53.497c.284-.536.574-1.068.851-1.604.984-1.902 1.965-3.806 2.942-5.71.371-.719.77-1.421 1.135-2.14.145-.29.273-.577.675-.509a.754.754 0 0 1 .441.266c.11.136.166.306.157.479.108 1.165.19 2.334.287 3.5.068.83.155 1.656.22 2.482.047.614.06 1.227.111 1.841.02.294.088.582.135.895.544-.16.591-.568.74-.885 1.054-2.243 2.09-4.496 3.144-6.74.287-.617.612-1.22.936-1.822.088-.16.21-.381.354-.41.24-.045.489-.014.71.087.267.124.142.373.047.568-.676 1.336-1.368 2.652-1.983 4.004-1.118 2.455-2.178 4.93-3.266 7.399-.148.326-.276.692-.456 1.015a.562.562 0 0 1-.282.308.592.592 0 0 1-.423.035.767.767 0 0 1-.338-.506 46.674 46.674 0 0 1-1.013-6.586c-.044-.797-.156-1.587-.247-2.518-.164.13-.31.278-.439.441-.297.51-.578 1.032-.851 1.554-1.206 2.31-2.401 4.624-3.614 6.933-.118.248-.287.47-.496.653-.399.326-.797.157-.868-.353-.071-.51-.095-.98-.129-1.466-.225-3.139-.439-6.278-.641-9.417-.027-.428 0-.862 0-1.306 0-.304.111-.549.47-.601a.696.696 0 0 1 .507.079c.151.09.26.234.303.401.089.265.14.541.152.82.044 1.26 0 2.524.111 3.78.172 1.67.03 3.338.618 5.033ZM26.218 50.904c-.748 0-1.34.023-1.924 0a.85.85 0 0 1-.588-.293.528.528 0 0 1 .162-.68.472.472 0 0 1 .231-.079c.978-.049 1.955-.042 2.933 0 .141 0 .352.24.399.411.069.269.076.55.022.822-.173.848-.377 1.69-.578 2.534-.261 1.098-.767 2.034-1.792 2.517a5.194 5.194 0 0 1-5.03-.194 1.725 1.725 0 0 1-.592-.62 1.822 1.822 0 0 1-.234-.842 11.932 11.932 0 0 1 .195-3.694 83.962 83.962 0 0 1 1.28-5.127c.26-1 .82-1.884 1.6-2.524.385-.339.849-.566 1.345-.658 1.181-.177 2.36-.286 3.523.142 1.163.427 1.628 1.2 1.572 2.497a8.894 8.894 0 0 1-.343 1.913c-.099.25-.28.454-.512.575-.453.253-.824-.02-.808-.565 0-.463.085-.927.085-1.39 0-1.338-.393-1.821-1.67-2.087-1.684-.349-2.111-.155-2.985 1.387-.173.29-.316.596-.428.917-.628 1.876-1.216 3.766-1.442 5.751a5.728 5.728 0 0 0 .314 2.925c.39.92.943 1.25 1.91 1.154 1.73-.168 2.572-.92 2.968-2.682.138-.707.245-1.374.387-2.11Z" fill="currentColor"/><path d="M47.668 42.322c.47.043.944.05 1.404.133a4.66 4.66 0 0 1 2.638 1.543 4.142 4.142 0 0 1 .991 2.76c-.08 1.76-.347 3.51-.798 5.22a3.794 3.794 0 0 1-1.303 2.101 4.246 4.246 0 0 1-2.39.947c-.933.108-1.878.093-2.807-.046-1.816-.26-3.006-1.668-3.066-3.47a16.239 16.239 0 0 1 .797-5.776c.15-.48.356-.944.617-1.38.997-1.578 1.966-2.059 3.917-2.032Zm-3.825 8.482v.667c0 1.267.513 1.884 1.82 2.255.879.229 1.8.278 2.7.143a2.36 2.36 0 0 0 1.19-.461c.342-.258.596-.603.733-.993.445-1.122.747-2.288.901-3.476a6.767 6.767 0 0 0-.712-4.209c-.613-1.247-3.312-1.781-4.36-1.03-.273.18-.508.406-.694.666a8.863 8.863 0 0 0-.755 1.435c-.652 1.6-.776 3.298-.83 5.003h.007ZM70.27 53.21a5.126 5.126 0 0 1 .491-2.284c.057-.178.151-.34.277-.474a.53.53 0 0 1 .469-.09c.107.05.17.287.18.444.009.157-.123.29-.14.444-.107.71-.17 1.428-.188 2.147.02.397.13.783.32 1.126.19.344.453.634.769.848.881.667 2.445.197 3.015-.899a2.21 2.21 0 0 0 .088-2.16c-.557-1.042-1.155-2.054-1.715-3.092a16.132 16.132 0 0 1-.9-1.84 4.568 4.568 0 0 1-.296-1.463c-.035-1.278.371-2.337 1.482-3.005 1.199-.741 2.47-.825 3.546-.026 1.637 1.212 1.964 2.878.214 4.444a.844.844 0 0 1-.4.197c-.1.023-.28 0-.314-.084a.596.596 0 0 1-.019-.424c.07-.14.167-.262.287-.357 1.11-1.048.519-2.695-.982-3.055a1.836 1.836 0 0 0-.898-.005 1.903 1.903 0 0 0-.804.423 2.058 2.058 0 0 0-.54.761 2.175 2.175 0 0 0-.16.938c.02.565.149 1.12.378 1.63.554 1.145 1.212 2.236 1.81 3.358.233.433.444.878.63 1.336.594 1.52-.193 2.922-1.137 3.653-.787.608-1.636 1.059-2.634.985-1.642-.12-2.536-.978-2.772-2.634-.031-.274-.038-.558-.057-.842Z" fill="currentColor"/></svg>
                </a>
              </Link>

              <div className="mx-auto flex-1 hidden md:flex space-x-5 lg:space-x-6 xl:space-x-8 justify-center">
                <FancyLink extraClasses="uppercase" destination="/" a11yText="Navigate to the home page" label="Home" active={active == 'home'} />

                <FancyLink extraClasses="uppercase" destination="/about" a11yText="Navigate to the about page" label="About Us" active={active == 'about'} />

                <FancyLink extraClasses="uppercase" destination="/calendar" a11yText="Navigate to the calendar page" label="Calendar" active={active == 'calendar'} />

                <FancyLink extraClasses="uppercase" destination="/blog" a11yText="Navigate to the blog page" label="Blog" active={active == 'blog'} />
                
                <FancyLink extraClasses="uppercase" destination="/get-involved" a11yText="Navigate to the get involved page" label="Get Involved" active={active == 'get-involved'} />
              </div>

              <div className="ml-auto flex space-x-5 justify-end">
                <a href="https://example.com" target="_blank" rel="noreferrer noopener" aria-label={'Navigate to donate'} className={`uppercase text-off-white hover:text-green-light focus:text-green-light`}>
                  Donate
                </a>
                <a href="https://example.com" target="_blank" rel="noreferrer noopener" aria-label={'Navigate to membership login'} className={`uppercase text-off-white hover:text-green-light focus:text-green-light`}>
                  Login
                </a>
              </div>
            </nav>
          </div>
        </Container>
      </div>
    </header>
  )
}