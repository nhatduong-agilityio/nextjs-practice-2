// Libs
import {
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react'
import React, { memo } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

// Components
import SearchIcon from '@components/Icons/SearchIcon'

export type SearchValue = {
  search: string
}

interface IProps {
  onSubmit: SubmitHandler<SearchValue>
}

const SearchForm = memo(({ onSubmit }: IProps) => {
  const { register, handleSubmit } = useForm<SearchValue>()

  return (
    <Stack width='full' px={['0', '50px']} style={{ marginTop: 0 }}>
      <form style={{ marginTop: 0 }} onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <InputGroup>
            <Input
              {...register('search')}
              data-testid='search'
              variant='outline'
              type='text'
              borderRadius='10px'
              borderColor='black'
              placeholder='Search here'
              fontSize={['sm', 'md']}
              height={['46px', '60px']}
              pl={['15px', '25px']}
            />
            <InputRightElement height={['46px', '60px']} paddingRight={['15px', '25px']}>
              <IconButton
                variant='ghost'
                aria-label='Search'
                height='full'
                justifyContent='flex-end'
                icon={<SearchIcon width='18px' height='18px' viewBox='0 0 18 18' fill='black' />}
                type='submit'
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>
    </Stack>
  )
})

SearchForm.displayName = 'SearchForm'

export default SearchForm
