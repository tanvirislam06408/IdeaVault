import { Button } from '@heroui/react';
import {Icon} from "@iconify/react";

const SocialLogin = () => {
    return <Button className="w-full rounded-xl mt-3" variant="tertiary">
        <Icon icon="devicon:google" />
        Sign in with Google
      </Button>
};

export default SocialLogin;