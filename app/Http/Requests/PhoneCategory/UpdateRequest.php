<?php

namespace App\Http\Requests\PhoneCategory;

use App\Models\PhoneCategory;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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

        $id = $this->id;

        return [
            //
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'slug' => 'required|string|max:255|unique:phone_categories,slug,'.$id,
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     */

    public function messages(): array

    {
        return [
            'name.string' => 'El nombre debe ser una cadena de texto',
            'name.required' => 'El nombre es requerido',
            'description.required' => 'La descripción es requerida',
            'slug.required' => 'El slug es requerido',
            'slug.max' => 'El slug no debe ser mayor a 255 caracteres',
            'slug.unique' => 'El slug ya existe',
        ];
    }
}
