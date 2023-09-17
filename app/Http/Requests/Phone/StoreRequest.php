<?php

namespace App\Http\Requests\Phone;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        
        return [
            //

            'name' => ['required', 'string', 'max:255'],
            'price' => ['required', 'numeric'],
            'phone_category_id' => ['required', 'numeric'],
            'file' => ['required', 'image', 'max:2048'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'El nombre es requerido',
            'price.required' => 'El precio es requerido',
            'phone_category_id.required' => 'La categoría es requerida',
            'file.required' => 'La imagen es requerida',
        ];
    }
    
}