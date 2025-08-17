import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";

import {
  BadgeCheckIcon,
  Candy,
  Citrus,
  Mail,
  MapPinCheckInside,
  Pencil,
  Phone,
  Shield,
  ShieldCheck,
  User,
} from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";

const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Username</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-ful xl:w-1/3 space-y-6">
          {/* USER BADGES CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-md">
            <h1 className="text-xl font-semibold">User Badge</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheckIcon
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex gap-2 mb-1">
                    <BadgeCheckIcon />
                    <h1 className="text-accent-foreground font-bold">
                      Verified User
                    </h1>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This user has been verivied by Betron
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border-1 border-green-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex gap-2 mb-1">
                    <Shield />
                    <h1 className="text-accent-foreground font-bold">Admin</h1>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage users
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex gap-2 mb-1">
                    <Candy />
                    <h1 className="text-accent-foreground font-bold">
                      Awarded
                    </h1>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This user has bean awarded for his/her contributions
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex gap-2 mb-1">
                    <Citrus />
                    <h1 className="text-accent-foreground font-bold">
                      Popular
                    </h1>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in comunity
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-md">
            <div className="flex items-center justify-between gap-2">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="sm">
                    <Pencil />
                  </Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile Complition
                </p>
                <Progress value={70} />
              </div>
              <div className="flex items-center gap-2">
                <User />
                <span className="font-bold">Username: </span>
                <span> john.doe </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail />
                <span className="font-bold">Email: </span>
                <span> john.doe@mail.com </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone />
                <span className="font-bold">Phone: </span>
                <span> + 1 234 5678 </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinCheckInside />
                <span className="font-bold">Location: </span>
                <span> New York, NY </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck />
                <span className="font-bold">Role: </span>
                <span>
                  <Badge className="bg-green-700 rounded-sm text-amber-50">
                    Admin
                  </Badge>
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2023.04.12
            </p>
          </div>
          {/* CARD LISt CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-md">
            <CardList title="Recent Transaction" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w=2/3 space-y-6">
          {/* USER CARD CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-md">USER CARD</div>
          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-md">CHART</div>
        </div>
      </div>
    </div>
  );
};
export default SingleUserPage;
