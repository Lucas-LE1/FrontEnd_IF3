import React, { useState } from 'react'

import {
    Box,
    Button,
    Center,
    FormControl,
    Heading,
    Icon,
    IconButton,
    Input,
    ScrollView,
    VStack,
    WarningOutlineIcon
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export default function CreateScreen() {

    const [formData, setData] = useState({});
    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(true);

    const validation = (type) => {

        if (formData[type] === (undefined)) {
            setErrors({ ...errors, [type]: "Por favor, preencha o campo corretamente!" });
            return
        } if (formData[type].length < 7) {
            setErrors({ ...errors, [type]: "O campo deve conter mais de 7 caracteres!" });
            return;
        }
        delete errors[type]

    }

    return <ScrollView w="100%" >
        <Center>
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading size="lg" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }} fontWeight="bold">
                    Seja Bem-Vindo
                </Heading>

                <Heading mt="1" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }} fontWeight="medium" size="xs">
                    Cadastre-se para continuar!
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl isRequired isInvalid={'email' in errors}>
                        <FormControl.Label
                            _text={{
                                fontWeight: 'bold',
                            }}
                        >Email </FormControl.Label>
                        <Input placeholder='Enter E-mail'
                            onChangeText={(value) => {
                                setData({
                                    ...formData,
                                    email: value
                                })
                                value === "" ? delete formData?.email : null

                                // validation('email')
                            }

                            }

                            onEndEditing={() => {
                                // console.log(formData);
                                // validation('email')
                            }}

                        />
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            {errors?.email}
                        </FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl isRequired isInvalid={'matricula' in errors} >
                        <FormControl.Label
                            _text={{
                                fontWeight: 'bold',
                            }}
                        >Matricula </FormControl.Label>
                        <Input placeholder="Enter matricula"
                            onChangeText={(value) => {
                                setData({
                                    ...formData,
                                    matricula: value
                                })
                                value === "" ? delete formData?.matricula : null
                                // validation('matricula')
                            }
                            }

                        />
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            {errors?.matricula}
                        </FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl isRequired isInvalid={'password' in errors} >
                        <FormControl.Label
                            _text={{
                                fontWeight: 'bold',
                            }}
                        >Password </FormControl.Label>
                        <Input placeholder="Enter password"
                            maxLength={16}
                            onChangeText={(value) => {
                                setData({
                                    ...formData,
                                    password: value
                                })
                                value === "" ? delete formData?.password : null

                                if (formData !== formData['password']) {
                                    setErrors({ ...errors, ['confirmation_password']: "A senha deve corresponder ao campo anterior!" });
                                    return;
                                }
                                delete errors['confirmation_password']
                                // validation('password')
                            }
                            }
                            type={show ? 'password' : 'text'}
                            InputRightElement={<Icon as={<MaterialIcons
                                name={show ? "visibility" : "visibility-off"} />}
                                size={5} mr="2" color="muted.400"

                                onPress={() => setShow(!show)} />
                            }

                        />
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            {errors?.password}
                        </FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl isRequired isInvalid={'confirmation_password' in errors} >
                        <FormControl.Label
                            _text={{
                                fontWeight: 'bold',
                            }}

                        >Confirm Password </FormControl.Label>
                        <Input placeholder="Enter password"
                            maxLength={16}
                            type={show ? 'password' : 'text'}
                            onChangeText={(value) => {
                                setData({
                                    ...formData,
                                    confirmation_password: value
                                })
                                value === "" ? delete formData?.confirmation_password : null

                                if (value !== formData['confirmation_password']) {
                                    setErrors({ ...errors, ['confirmation_password']: "A senha deve corresponder ao campo anterior!" });
                                    return;
                                }
                                delete errors['confirmation_password']

                                // validation('confirmation_password')
                            }
                            }

                        />
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            {errors?.confirmation_password}
                        </FormControl.ErrorMessage>
                    </FormControl>

                    <Button mt="2" colorScheme="indigo"
                        onPress={() => {
                            validation('email')
                            validation('matricula')
                            validation('password')
                            validation('confirmation_password')
                        }}
                    >
                        Cadastrar
                    </Button>
                </VStack>

            </Box>
        </Center>
    </ScrollView>;

}