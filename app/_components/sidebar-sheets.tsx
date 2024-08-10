import Image from "next/image"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"

import Link from "next/link"
const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      {/* AVATAR */}
      <div className="flex items-center gap-3 border-b border-solid py-5">
        <Avatar>
          <AvatarImage src="data:image/jpeg;base64,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" />
        </Avatar>

        <div>
          <p className="font-bold">Jeferson</p>
          <p className="text-xs">emailteste@gmail.com</p>
        </div>
      </div>

      {/* DOIS BOTOES PRIMEIROS */}
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>

        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      {/* BOTOES EM COMPONENTES */}
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              alt={option.title}
              src={option.imageUrl}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <Button variant="ghost" className="justify-start gap-2">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
